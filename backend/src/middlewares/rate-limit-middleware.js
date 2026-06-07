import rateLimit from "express-rate-limit";


const excludedEmails =
    (process.env.ADMIN_EMAILS || "")
        .split(",")
        .map(e => e.trim().toLowerCase());


export const initRateLimit = (minutes, max) => rateLimit({
    windowMs: minutes * 60 * 1000,
    max: max,
    handler: (req, res, next, options) => {
        const resetTime = Math.ceil(req.rateLimit.resetTime - Date.now()) / 1000 / 60;

        res.status(429).json({
            message: "Too many requests",
            maxAttempts: options.max,
            retryAfter: `${Math.ceil(resetTime)} minutes`,
            resetTime,
            error: "Rate limit exceeded"
        });
    }
});

export const rateLimitWithExclusions = (minutes, max) =>
    rateLimit({
        windowMs: minutes * 60 * 1000,
        max,

        skip: (req) => {
            const email = req?.user?.email?.trim().toLowerCase();

            if (!email) return false; // si no hay email, se limita

            return excludedEmails.includes(email); 
        },

        handler: (req, res, next, options) => {
            const resetTime = Math.ceil(
                (req.rateLimit.resetTime - Date.now()) / 1000 / 60
            );

            res.status(429).json({
                message: "Too many requests",
                maxAttempts: options.max,
                retryAfter: `${Math.ceil(resetTime)} minutes`,
                resetTime,
                error: "Rate limit exceeded"
            });
        }
    });