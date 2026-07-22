import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({

    chat: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Chat",
        required: true,
        index: true
    },

    role: {
        type: String,
        enum: ["user", "assistant"],
        required: true
    },

    content: {
        type: String,
        required: true,
        trim: true
    },

    sources: [
        {
            sourceType: {
                type: String,
                enum: ["topic", "article", "resource"],
                required: true
            },

            sourceId: {
                type: mongoose.Schema.Types.ObjectId,
                required: true
            },

            title: {
                type: String,
                required: true
            }
        }
    ],

    promptTokens: {
        type: Number,
        default: 0
    },

    completionTokens: {
        type: Number,
        default: 0
    },

    totalTokens: {
        type: Number,
        default: 0
    },

    responseTime: {
        type: Number,
        default: 0
    }

}, { timestamps: true });

messageSchema.index({ chat: 1, createdAt: 1 });

export const Message = mongoose.model("Message", messageSchema);