import mongoose from "mongoose";

const articleSchema = new mongoose.Schema({

    title: {
        type: String,
        required: [true, "Article title is required"],
        trim: true,
        minlength: 3,
        maxlength: 150
    },

    slug: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },

    summary: {
        type: String,
        required: [true, "Summary is required"],
        trim: true,
        minlength: 20,
        maxlength: 300
    },

    content: {
        type: String,
        required: [true, "Article content is required"]
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

    featuredImage: {
        type: String,
        default: ""
    },

    status: {
        type: String,
        enum: ["draft", "published"],
        default: "draft"
    },

    isFeatured: {
        type: Boolean,
        default: false
    },

    readingTime: {
        type: Number,
        default: 1
    },

    seoTitle: {
        type: String,
        trim: true,
        maxlength: 70
    },

    seoDescription: {
        type: String,
        trim: true,
        maxlength: 160
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

    publishedAt: {
        type: Date
    }

}, {
    timestamps: true
});

// indexes
// articleSchema.index({ slug: 1 });

// articleSchema.index({ topic: 1 });

// articleSchema.index({ status: 1 });

// articleSchema.index({ createdBy: 1 });

// articleSchema.index({ tags: 1 });

// articleSchema.index({
//     title: "text",
//     summary: "text",
//     content: "text"
// });


// Reading time middleware
articleSchema.pre("save", async function () {

    if (!this.isModified("content")) {
        return;
    }

    const words = this.content.trim().split(/\s+/).length;

    this.readingTime = Math.max(1, Math.ceil(words / 200));

});

export const Article = mongoose.model("Article", articleSchema);