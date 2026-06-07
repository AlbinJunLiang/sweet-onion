import { admin } from '../config/firebase.js';

const verifyToken = async (req, res, next) => {

    try {

        const authHeader = req.headers.authorization;

        if (!authHeader) {
            return res.status(401).json({
                message: 'Token is required.'
            });
        }

        const token = authHeader.split(' ')[1];

        const decodedToken =
            await admin.auth().verifyIdToken(token);

        req.user = decodedToken;

        next();

    } catch (error) {

        return res.status(401).json({
            message: 'Invalid token.'
        });

    }

};

export default verifyToken;