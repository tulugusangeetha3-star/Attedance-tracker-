const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {

    try {

        // Get token from headers
        const token = req.header("Authorization");

        // Check if token exists
        if (!token) {
            return res.status(401).json({
                message: "Access Denied. No Token Provided"
            });
        }

        // Verify token
        const verified = jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        // Save user data in request
        req.user = verified;

        // Continue to next function
        next();

    } catch (error) {

        res.status(400).json({
            message: "Invalid Token"
        });

    }
};

module.exports = authMiddleware;


