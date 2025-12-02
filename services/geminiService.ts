import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { AI_SYSTEM_INSTRUCTION } from '../constants';

let aiInstance: GoogleGenAI | null = null;

// Initialize the API client
// Note: In a real production environment, we should proxy this through a backend
// to hide the API key, or use a restricted public key.
// For this portfolio demo, we assume the env var is present.
const getAIInstance = () => {
  if (!aiInstance && process.env.API_KEY) {
    aiInstance = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }
  return aiInstance;
};

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export const sendMessageToGemini = async (
  message: string,
  history: ChatMessage[]
): Promise<string> => {
  const ai = getAIInstance();
  
  if (!ai) {
    // If no API key is set, return a mock response for the UI demo
    await new Promise(resolve => setTimeout(resolve, 1000));
    return "I'm currently in demo mode as no API Key was detected. In production, I would answer your question using the Gemini 2.5 Flash model!";
  }

  try {
    // Convert history to format expected by Chat (if we were using chat sessions),
    // but for simple Q&A on a portfolio, single turn with context is often sufficient
    // or we can use the Chat API. Let's use the Chat API for context retention.
    
    // Construct the history for the chat model
    // Note: The SDK chat history format differs slightly from our internal ChatMessage type
    // We will start a fresh chat each time for simplicity in this stateless service wrapper,
    // or arguably better, we pass the context in the system instruction and just send the last message 
    // if we want to save tokens, but let's do a simple generateContent with history context manually appended 
    // or use ai.chats.create if we wanted a persistent session object.
    
    // Approach: Single generation with system instruction + minimal history context to save complexity.
    
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: message, // In a real app, we might append previous conversation context here
      config: {
        systemInstruction: AI_SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    return response.text || "I couldn't generate a response at the moment.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Sorry, I'm having trouble connecting to my brain right now. Please try again later.";
  }
};
