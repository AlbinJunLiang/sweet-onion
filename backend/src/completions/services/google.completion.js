export const googleCompletion = async ({
    content,
    instruction,
    context = '',
    system = false,
    model = 'gemini-2.5-flash',
    isJson = false
}) => {
    try {
        const response = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "x-goog-api-key": `${process.env.GOOGLE_AI_API_KEY}`
                },
                body: JSON.stringify(createBody({ content, instruction, context, system, model, isJson }))
            }
        );

        if (!response.ok) {
            const errorData = await response.json().catch(() => null);
            const mensajeError = errorData?.error?.message || `HTTP Error: ${response.status}`;
            throw new Error(`[Google Error] ${mensajeError}`);
        }

        const data = await response.json();
        return data.candidates[0].content.parts[0].text;
    } catch (error) {
        throw error;
    }
}

export const createBody = ({
    content,
    instruction,
    context = '',
    system = false,
    model = 'gemini-2.5-flash',
    isJson = false
}) => {
    const userParts = [];

    if (context && context.trim() !== '') {
        userParts.push({ text: `Background Conversation History:\n${context}` });
    }
    userParts.push({ text: content });

    const body = {
        contents: [{ role: "user", parts: userParts }]
    };

    body.generationConfig = {
        temperature: isJson ? 0 : 0.7
    };

    if (isJson) {
        body.generationConfig.responseMimeType = "application/json";
    }

    if (system && instruction) {
        body.systemInstruction = {
            parts: [{ text: instruction }]
        };
    }

    return body;
};