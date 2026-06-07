
export const nvidiaCompletion = async ({
    content,
    instruction,
    context = '',
    system = false,
    model = "nvidia/nemotron-3-nano-omni-30b-a3b-reasoning",
    isJson = false
}) => {
    try {
        const response = await fetch(
            "https://integrate.api.nvidia.com/v1/chat/completions",
            {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${process.env.NVIDIA_API_KEY}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(createBody({ content, instruction, context, system, model, isJson }))
            }
        );

        if (!response.ok) {
            const rawErrorText = await response
                .text()
                .catch(() => "Could not read the error response body");
            console.error("[NVIDIA RAW ERROR]:", rawErrorText);
            let result = rawErrorText;
            try {
                const jsonError = JSON.parse(rawErrorText);
                result = jsonError?.error?.message || jsonError?.error || jsonError?.detail || rawErrorText;
            } catch (e) {
            }

            throw new Error(`[Nvidia Error] ${typeof result === 'object' ? JSON.stringify(result) : result}`);
        }

        const data = await response.json();
        return data.choices[0].message.content;

    } catch (error) {
        throw error;
    }
};

export const createBody = ({
    content,
    instruction,
    context = '',
    system = false,
    model = "nvidia/nemotron-3-nano-omni-30b-a3b-reasoning",
    isJson = false
}) => {

    const messages = [];
    let systemContent = "";

    if (system && instruction) {
        systemContent += isJson
            ? `${instruction}\nReturn ONLY a valid JSON object matching the requested schema.`
            : `${instruction}\n\n`;
    }

    if (context && context.trim() !== '') {
        systemContent += `Background Conversation History:\n${context}`;
    }

    if (systemContent.trim() !== "") {
        messages.push({
            role: "system",
            content: systemContent.trim()
        });
    }

    messages.push({
        role: "user",
        content: content
    });

    const body = {
        model: model,
        messages: messages,
        temperature: isJson ? 0 : 0.6,
        top_p: 0.95,
        max_tokens: 4096,
        stream: false
    };

    if (isJson) {
        body.response_format = {
            type: "json_object"
        };
    }

    return body;
};