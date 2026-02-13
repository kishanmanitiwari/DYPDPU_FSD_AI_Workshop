"use server";

import { GoogleGenAI } from "@google/genai";

/*
Centralized client (industry pattern)

Why?
- Client is stateless (only API key)
- Faster: reused between requests
- Serverless platforms reuse module memory

Clients that depend on cookies or sessions
should be created inside functions.
*/
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY, //Creating an instance ig gemini ll
});

export async function askGemini(userPrompt) {
  try {
    const result = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: userPrompt,
    });

    return result.text || "No response text.";
  } catch (error) {
    console.error("AI Error:", error);
    return `Error: ${error.message}`;
  }
}
