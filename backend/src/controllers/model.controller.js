import { mappingModelResponse } from "../mappers/model.mapper.js";
import Model from "../models/model.model.js";

export const createModel = async (req, res) => {
    try {
        const { model, provider, status, defect } = req.body;

        const exists = await Model.findOne({
            model,
            provider
        });

        if (exists) {
            return res.status(400).json({
                success: false,
                message: "A model with the same provider already exists."
            });
        }

        const newModel = await Model.create({
            model: model.toLowerCase(),
            provider: provider.toLowerCase(),
            status,
            defect,
        });

        return res.status(201).json({
            success: true,
            data: mappingModelResponse(newModel),
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};



export const getModels = async (req, res) => {
    try {
        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.limit) || 10;

        const skip = (page - 1) * limit;

        const [models, total] = await Promise.all([
            Model.find()
                .select("-createdAt -updatedAt")
                .sort({ createdAt: -1 })
                .skip(skip)
                .limit(limit),
            Model.countDocuments(),
        ]);

        return res.status(200).json({
            success: true,
            data: models.map(mappingModelResponse),
            pagination: {
                total,
                page,
                limit,
                totalPages: Math.ceil(total / limit),
            },
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

export const getModelById = async (req, res) => {
    try {
        const { id } = req.params;

        const model = await Model.findById(id).select("-createdAt -updatedAt");

        if (!model) {
            return res.status(404).json({
                success: false,
                message: `Model with ID ${id} not found`,
            });
        }

        return res.status(200).json(mappingModelResponse(model),
        );
    } catch (error) {
        // Esto captura errores si el ID no es válido para MongoDB (formato incorrecto)
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};


export const updateModel = async (req, res) => {
    try {
        const { id } = req.params;
        const { model, provider, status, defect } = req.body;

        const existingModel = await Model.findById(id);

        if (!existingModel) {
            return res.status(404).json({
                success: false,
                message: "Model not found."
            });
        }

        const normalizedModel = model?.toLowerCase();
        const normalizedProvider = provider?.toLowerCase();

        if (normalizedModel || normalizedProvider) {
            const duplicate = await Model.findOne({
                model: normalizedModel ?? existingModel.model,
                provider: normalizedProvider ?? existingModel.provider,
                _id: { $ne: id }
            });

            if (duplicate) {
                return res.status(400).json({
                    success: false,
                    message: "A model with the same provider and model already exists."
                });
            }
        }

        existingModel.model = normalizedModel ?? existingModel.model;
        existingModel.provider = normalizedProvider ?? existingModel.provider;
        existingModel.status = status ?? existingModel.status;
        existingModel.defect = defect ?? existingModel.defect;

        await existingModel.save();

        return res.status(200).json({
            success: true,
            data: mappingModelResponse(existingModel)
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};


export const deleteModel = async (req, res) => {
    try {
        const { id } = req.params;

        const modelDeleted = await Model.findByIdAndDelete(id);

        if (!modelDeleted) {
            return res.status(404).json({
                success: false,
                message: "Model not found",
            });
        }

        return res.status(200).json({
            success: true,
            message: "Model deleted successfully",
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};