
import mongoose from "mongoose";

export const questionSchema = new mongoose.Schema({
    question: { type: String, required: true }
});