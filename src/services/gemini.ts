import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.GEMINI_API_KEY;

export async function getClinicalAssistantResponse(prompt: string) {
  if (!apiKey) return "Assistant is currently resting. Please contact us directly.";

  try {
    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        systemInstruction: `You are the AI Clinical Assistant for ALL SMILES Dental Clinic. 
        Located at: South Africa Medical Centre, CNR South Africa Drive & Tenesse Avenue, Cosmo City, Roodepoort.
        Our dentists: Dr. Daniel Carter (Principal), Dr. Emily Carter (Associate).
        Phone: +27 12 312 9021
        Our services: Braces, Crowns, Teeth Whitening, Implants, Checkups.
        Tone: Professional, calming, luxurious, medical.
        Language: English only.
        If asked about location or reaching the clinic, use your grounding tools to provide accurate travel info if possible.`,
        tools: [{ googleMaps: {} }]
      }
    });

    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm sorry, I'm having trouble connecting right now. Please call us at the clinic.";
  }
}
