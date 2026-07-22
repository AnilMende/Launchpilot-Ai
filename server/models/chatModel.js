import mongoose from "mongoose";

const chatSchema = new mongoose.Schema({

    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true,
        index : true
    },

    title : {
        type : String,
        trim : true,
        default : "New Chat",
        maxlength : 100
    },

    lastMessage : {
        type : String,
        default : "",
        maxlength : 300
    },

    isPinned : {
        type : Boolean,
        default : false
    },

    isDeleted : {
        type : Boolean,
        default : false
    },

}, { timestamps : true });

chatSchema.index({ user: 1, updatedAt: -1 });

export const Chat = mongoose.model("Chat", chatSchema);