import mongoose from "mongoose";

const resourceSchema = new mongoose.Schema({

    title: {
        type: String,
        required: [true, "Resource title is required"],
        trim: true,
        minlength: 3,
        maxlength: 150,
    },

    slug: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },

    description: {
        type: String,
        required: [true, "Description is required"],
        trim: true,
        minlength: 10,
        maxlength: 500
    },

    type: {
        type: String,
        enum: [
            "pdf",
            "website",
            "video",
            "tool",
            "template"
        ],
        required: true
    },

    url: {
        type: String,
        required: [true, "Resource URL is required"],
        trim: true,
        match: [/^https?:\/\/.+/, "Invalid URL"]
    },

    topic: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Topic",
        required: true
    },

    tags: [{
        type: String,
        trim: true,
        lowercase: true
    }],

    thumbnail: {
        type: String,
        default: ""
    },

    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    updatedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },

    isPublished: {
        type: Boolean,
        default: true
    },

    isDeleted: {
        type: Boolean,
        default: false
    }

}, {
    timestamps: true
});

resourceSchema.index(
    {
        title: 1
    },
    {
        unique: true,
        partialFilterExpression: {
            isDeleted: false
        }
    }
);

export const Resource = mongoose.model("Resource", resourceSchema);