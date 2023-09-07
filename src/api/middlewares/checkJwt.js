const jwt = require("jsonwebtoken");
const config = require("../../config");
const redisClient = require("../../loaders/redis");
const { TOKEN_EXPIRED, LOGIN_FAIL } = require("../../util/response/message");
const response = require("../../util/response");

const checkJwt = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split("Bearer ")[1];
        const decoded = await jwt.verify(token, config.jwt.secret);
        const redisToken = await redisClient.get(decoded.userId.toString());
        if (redisToken !== token) {
            return res.status(401).json(response.response401(LOGIN_FAIL));
        }
        req.userId = decoded.userId;
        next();
    } catch (err) {
        if (err.name === "TokenExpiredError") {
            return res.status(403).json(response.response403(TOKEN_EXPIRED));
        } else {
            return res.status(401).json(response.response401(LOGIN_FAIL));
        }
    }
};

module.exports = { checkJwt };
