
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getStockInsight = async (stockSymbol: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Please provide a short, up-to-date professional insight in English about the stock ${stockSymbol}. Explain why it is important to the Israeli economy and its current market trend. Keep the tone modern and engaging for Gen-Z investors.`,
    });
    return response.text;
  } catch (error) {
    console.error("Error fetching insight:", error);
    return "Could not load insights at this moment.";
  }
};

export const getEconomySummary = async () => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: "Summarize the current state of the Israeli economy and high-tech sector in 3 short, key points. Write in modern English, focusing on resilience and growth.",
    });
    return response.text;
  } catch (error) {
    console.error("Error summary:", error);
    return "Economic update temporarily unavailable.";
  }
};
