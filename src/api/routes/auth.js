const { Router } = require("express");
const router = Router();
const { checkJwt } = require("../middlewares/checkJwt");
const {
    getUserByKakao,
    authOrCreateUser,
    generateToken,
} = require("../../services/auth");
const {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    SIGNUP_SUCCESS,
} = require("../../util/response/message");
const response = require("../../util/response");

router.post("/login", async (req, res, next) => {
    try {
        const access_token = req.body.access_token;
        const userProfile = await getUserByKakao(access_token);
        if (!userProfile) {
            return res.status(401).json(response.response401(LOGIN_FAIL));
        }

        const { userId, isNewUser } = await authOrCreateUser(userProfile);
        const token = await generateToken(userId);
        return res
            .status(isNewUser ? 201 : 200)
            .json(
                isNewUser
                    ? response.response201(SIGNUP_SUCCESS, { token })
                    : response.response200(LOGIN_SUCCESS, { token })
            );
    } catch (err) {
        return next(err);
    }
});

router.get("/check", checkJwt, async (req, res) => {
    const userId = req.userId;
    const token = await generateToken(userId);
    return res.status(200).json(response.response200(LOGIN_SUCCESS, { token }));
});

module.exports = router;
