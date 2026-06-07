import mongoose from 'mongoose';
import User from "../models/user.model.js";
import Chat from "../models/chat.model.js";
import Message from "../models/message.model.js";


const modelsMap = {
    chat: Chat,
    user: User,
    message: Message
};

export const authorizeUserResource = (resourceType, idParamName) => {
    return async (req, res, next) => {
        try {
            const idFromUrl = req.params[idParamName];
            const SelectedModel = modelsMap[resourceType];

            if (!SelectedModel) {
                return res.status(500).json({ error: `Architecture Error. Resource type '${resourceType}' not mapped.` });
            }

            if (!mongoose.Types.ObjectId.isValid(idFromUrl)) {
                return res.status(400).json({ error: "Invalid ID format in URL." });
            }

            // 1. Traducimos el authId de Firebase al _id de Mongo del usuario logueado
            const user = await User.findOne({ authId: req.user?.uid }).select('_id');
            if (!user) return res.status(404).json({ error: "User not found." });

            // CASO 1: Si estás protegiendo la identidad del propio USUARIO
            if (resourceType === 'user') {
                // Comparamos el _id de la URL con el _id del usuario del token
                if (idFromUrl !== user._id.toString()) {
                    return res.status(403).json({
                        error: "Access Denied. You do not have permission to access another user's resources."
                    });
                }
            }
            // CASO 2: Si estás protegiendo un recurso externo (Chat, etc.)
            else {
                const resource = await SelectedModel.findOne({
                    _id: idFromUrl,
                    creatorId: user._id.toString(),
                    status: true
                }).select('_id');

                if (!resource) {
                    return res.status(403).json({
                        error: "Access Denied. You do not have permission to access another user's resources."
                    });
                }
            }

            req.localUserId = user._id;
            next();
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    };
};