import { GoogleGenAI } from "@google/genai";
import { ApiError } from "../utils/ApiError.js";
import { SYSTEM_PROMPT } from "../utils/geminiPrompt.js";

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
})


const generateGeminiResponse = async (

    question,

    context

) => {

    const prompt = `

${SYSTEM_PROMPT}

Knowledge Base

${context}

-------------------------

User Question

${question}

`;

    try {

        const response = await ai.models.generateContent({

            model: "gemini-3.5-flash",

            contents: prompt

        });

        return {

            answer: response.text,

            usage: {

                promptTokens:
                    response.usageMetadata?.promptTokenCount || 0,

                completionTokens:
                    response.usageMetadata?.candidatesTokenCount || 0,

                totalTokens:
                    response.usageMetadata?.totalTokenCount || 0

            }

        };

    } catch (error) {

        console.error("Gemini Error:", error);

        throw new ApiError(
            500,
            error.message || "Failed to generate AI response"
        );

    }

};

export { generateGeminiResponse };