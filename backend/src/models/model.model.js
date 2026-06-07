import mongoose from "mongoose";

const modelSchema = new mongoose.Schema(
    {
        model: {
            type: String,
            default: "user",
            required: true,
        },
        provider: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            enum: ["ACTIVE", "INACTIVE"],
            default: "ACTIVE",
        },
        defect: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true }
);

modelSchema.index(
    { defect: 1 },
    {
        unique: true,
        partialFilterExpression: { defect: true },
    }
);
modelSchema.index({ model: 1, provider: 1 }, { unique: true });

export default mongoose.model("Model", modelSchema);