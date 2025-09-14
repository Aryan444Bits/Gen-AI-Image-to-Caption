const { GoogleGenAI } = require("@google/genai");

// The client gets the API key from the environment variable `GEMINI_API_KEY`.
const ai = new GoogleGenAI({
    apiKey : process.env.GEMINI_API_KEY
});

async function  generateCaption(base64ImageFile) {
    const contents = [
        {
            inlineData: {
                mimeType: "image/jpeg",
                data: base64ImageFile,
            },
        },
        { text: "Caption this image." },
    ];

    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: contents,
        config:{
            systemInstruction:`
            You are an expert in generating captions for images.
            You generate single captions for images.
            Your caption ahould be short and concise.
            You use hashtags and emojis in the caption.
            For caption generation use tapori language.
            make the caption in funny and dark and darkest humor.
            `
        }
    });
    
    return response.text;
}


module.exports = generateCaption