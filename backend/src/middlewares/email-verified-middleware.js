const allowedEmails =
    process.env.ADMIN_EMAILS
        ?.split(",")
        .map(e => e.trim().toLowerCase()) || [];



export const verifyEmailVerified = (req, res, next) => {
    if (!req.user) {
        return res.status(500).json({
            message: "Architecture Error. verifyToken middleware must be executed before verifyEmailVerified."
        });
    }

    if (!req.user.email_verified) {
        return res.status(403).json({
            message: "Access Denied. Your email address has not been verified yet."
        });
    }
    next();
};

export const allowOnlyEmails = (req, res, next) => {
    if (!req.user) {
        return res.status(401).json({
            message: "Auth required"
        });
    }

    const email = req.user.email?.toLowerCase();

    if (!allowedEmails.includes(email)) {
        return res.status(403).json({
            message: "Access denied"
        });
    }

    next();
};