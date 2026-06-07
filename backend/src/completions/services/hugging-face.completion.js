export const huggingFaceCompletion = async ({
    content,
    instruction,
    context = '',
    system = false,
    model = 'openai/gpt-oss-120b:nscale',
    isJson = false
}) => {
    try {
        const response = await fetch(
            "https://router.huggingface.co/v1/chat/completions",
            {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${process.env.HUGGINGFACE_API_KEY}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(createBodyHF({ content, instruction, context, system, model, isJson }))
            }
        );

        if (!response.ok) {
            const errorData = await response.json().catch(() => null);
            const mensajeError = errorData?.error?.message || `HTTP Error: ${response.status}`;
            throw new Error(`[HuggingFace Error] ${mensajeError}`);
        }

        const data = await response.json();
        return data.choices[0].message.content;
    } catch (error) {
        throw error;
    }
};

export const createBodyHF = ({
    content,
    instruction,
    context = '',
    system = false,
    model = 'openai/gpt-oss-120b:nscale',
    isJson = false
}) => {
    const messages = [];

    if (system && instruction) {
        const finalInstruction = isJson
            ? `${instruction} You must output the response strictly as a valid JSON object.`
            : instruction;
        messages.push({ role: "system", content: finalInstruction });
    }

    if (context && context.trim() !== '') {
        messages.push({
            role: "system",
            content: `Background Conversation History:\n${context}`
        });
    }

    messages.push({ role: "user", content: content });

    const body = {
        model: model,
        messages: messages,
        temperature: isJson ? 0 : 0.7,
        max_tokens: 1024
    };

    if (isJson) {
        body.response_format = { type: "json_object" };
    }

    return body;
};