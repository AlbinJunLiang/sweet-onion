import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        authId: {
            type: String,
            unique: true,
            index: true,
            required: true
        },

        name: {
            type: String,
            default: null
        },

        email: {
            type: String,
            unique: true,
            required: true
        },

        status: {
            type: String,
            enum: ['verified', 'inactive', 'registered'],
            default: 'registered'
        },

        role: {
            type: String,
            enum: ['user', 'admin', 'guest'],
            default: 'user'
        }
    },
    { timestamps: true }
);

export default mongoose.model("User", userSchema);