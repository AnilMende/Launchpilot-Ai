import mongoose from "mongoose";

const topicSchema = new mongoose.Schema({

    title : {
        type : String,
        required : true,
        trim : true,
        unique : true,
        minlength : 3,
        maxlength : 100
    },

    slug : {
        type : String,
        required : true,
        unique : true,
        lowercase : true,
        trim : true
    },

    description : {
        type : String,
        required : true,
        maxlength : 500
    },

    icon : {
        type : String,
        default : "BookOpen"
    },

    color : {
        type : String,
        default : "#2563EB"
    },

    displayOrder : {
        type : Number,
        default : 0
    },

    isPublished : {
        type : Boolean,
        default : true
    },

    createdBy : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    }

}, { timestamps : true})

export const Topic = mongoose.model("Topic", topicSchema);