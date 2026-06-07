import { mappingRegisterUser, mappingUserResponse } from "../mappers/user.mapper.js";
import User from "../models/user.model.js";
import admin from 'firebase-admin'; // SDK de Firebase Admin
import { extractBearerToken } from "../utils/auth.util.js";


export const createUser = async (req, res) => {
    try {
        const { name, email } = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "The Email already registered." });
        }
        const newUser = new User({ name, email });
        await newUser.save();

        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ message: "Error creating user.", error: error.message });
    }
};


export const registerUser = async (req, res, next) => {
    try {
        const token = extractBearerToken(req);
        if (!token) {
            return res.status(401).json({ error: 'Token not provided.' });
        }

        const decodedToken = await admin.auth().verifyIdToken(token);
        const { email, name, email_verified = false, uid } = decodedToken;

        if (!email) {
            return res.status(400).json({ error: 'The Firebase token does not contain a valid email.' });
        }

        if (!uid) {
            return res.status(400).json({ error: 'The Firebase token does not contain a valid UID.' });
        }

        let userDB = await User.findOne({ email: email });

        if (isCurrentStatus(userDB, 'inactive')) {
            return res.status(403).json({ error: 'This account is currently inactive in the system.' });
        }

        if (!userDB) {
            userDB = new User(mappingRegisterUser(uid, name, email, email_verified, 'user'));
            await userDB.save();

        } else if (isCurrentStatus(userDB, 'registered') && email_verified) {
            userDB.status = 'verified';
            await userDB.save();
        } else if (!email_verified) {
            userDB.status = 'registered';
            await userDB.save();
        }

        req.user = userDB;
        return res.status(200).json({
            success: true,
            message: "User successfully authenticated and synchronized.",
            user: mappingUserResponse(userDB)
        });

    } catch (error) {
        console.error('Firebase authentication error:', error.message);
        return res.status(403).json({ error: 'Invalid or expired Firebase token.', message: error.message });
    }
};


function isCurrentStatus(user, status) {
    return user && user.status === status;
}




export const getUsers = async (req, res) => {
    try {
        // Obtenemos los valores de la query string, con valores por defecto
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const skip = (page - 1) * limit;

        // Consultamos los usuarios con limit y skip
        const users = await User.find()
            .sort({ createdAt: -1 }) // Es buena práctica ordenar por fecha
            .skip(skip)
            .limit(limit);

        // Opcional: Obtener el total para el frontend
        const totalUsers = await User.countDocuments();

        res.status(200).json({
            data: users.map(mappingUserResponse),
            pagination: {
                page,
                totalPages: Math.ceil(totalUsers / limit),
                limit,
                total: totalUsers
            }
        });
    } catch (error) {
        res.status(500).json({ message: "Error fetching users.", error: error.message });
    }
};


export const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ message: "User not found." });

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: "Error finding user.", error: error.message });
    }
};


export const updateUser = async (req, res) => {
    try {
        const { id } = req.params;

        let { name, status, role, authId } = req.body;

        if (status) status = status.toLowerCase();
        if (role) role = role.toLowerCase();

        const updateData = { name, status, role, authId };

        Object.keys(updateData).forEach(key =>
            updateData[key] === undefined && delete updateData[key]
        );

        const userToUpdate = await User.findById(id);
        if (!userToUpdate) return res.status(404).json({ message: "User not found." });

        if (userToUpdate.role === 'admin' && role && role !== 'admin') {
            return res.status(403).json({ message: "Admins cannot downgrade their own role." });
        }

        const updatedUser = await User.findByIdAndUpdate(
            id,
            { $set: updateData },
            { new: true, runValidators: true }
        );

        res.status(200).json( mappingUserResponse(updatedUser));
    } catch (error) {
        res.status(400).json({ message: "Error updating user.", error: error.message });
    }
};



export const deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) return res.status(404).json({ message: "User not found." });

        res.status(200).json({ message: "User has been successfully deleted." });
    } catch (error) {
        res.status(500).json({ message: "Error deleting user.", error: error.message });
    }
};