import { Chat } from "../models/chatModel.js";
import { Message } from "../models/messageModel.js";
import { ApiError } from "../utils/ApiError.js";

import { searchKnowledgeService } from "./knowledge.service.js";
import { generateGeminiResponse } from "./gemini.service.js";

// Main service
const generateAIResponseService = async (chatId, question, user) => {

    const startTime = Date.now();

    // find chat
    const chat = await Chat.findOne({
        _id: chatId,
        user: user._id
    });

    if (!chat) {
        throw new ApiError(
            404,
            "Chat not found"
        )
    };

    // Save user message
    const userMessage = await Message.create({
        chat: chatId,
        role: "user",
        content: question
    });

    // Search knowledge base
    const knowledge = await searchKnowledgeService(question);

    const context = knowledge.context.trim()
        ? knowledge.context
        : "No matching information was found in the knowledge base.";

    const sources = knowledge.sources;

    // Generate AI Response
    const aiResult = await generateGeminiResponse(question, context);

    const responseTime = Date.now() - startTime;

    // Source array
    const messageSources = [];

    // Adding topics
    sources.topics.forEach(topic => {

        messageSources.push({

            sourceType: "topic",

            sourceId: topic._id,

            title: topic.title

        });

    });

    // Add articles
    sources.articles.forEach(article => {

        messageSources.push({

            sourceType: "article",

            sourceId: article._id,

            title: article.title

        });

    });

    // Add Resources
    sources.resources.forEach(resource => {

        messageSources.push({

            sourceType: "resource",

            sourceId: resource._id,

            title: resource.title

        });

    });

    // Save AI message
    const assistantMessage = await Message.create({
        chat: chatId,
        role: "assistant",
        content: aiResult.answer,

        promptTokens: aiResult.usage.promptTokens,
        completionTokens: aiResult.usage.completionTokens,
        totalTokens: aiResult.usage.totalTokens,
        responseTime,
        sources : messageSources
    });

    // Update Last Message
    chat.lastMessage = aiResult.answer.substring(0, 120);

    chat.lastActivity = new Date();

    await chat.save();

    return {
        userMessage,
        assistantMessage,
        sources,
        usage: aiResult.usage
    };

}

export { generateAIResponseService };