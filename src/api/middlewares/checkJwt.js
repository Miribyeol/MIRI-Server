const jwt = require("jsonwebtoken");
const config = require("../../config");

const checkJwt = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split("Bearer ")[1];
        const decoded = await jwt.verify(token, config.jwt.secret);
        req.userId = decoded.userId;
        next();
    } catch (err) {
        if (err.name === "TokenExpiredError") {
            return res.status(419).json({ message: "Token expired" });
        } else {
            return res.status(401).json({ message: "Unauthorized" });
        }
    }
};

module.exports = { checkJwt };
