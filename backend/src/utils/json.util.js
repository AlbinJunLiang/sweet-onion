export const safeParseJSON = (rawString) => {
    if (!rawString || typeof rawString !== 'string') {
        return null;
    }

    try {
        const cleanString = rawString
            .replace(/```json/gi, "")
            .replace(/```/g, "")
            .trim();

        return JSON.parse(cleanString);
    } catch (error) {
        console.error("[Parser Error]:", error.message);
        return null;
    }
};