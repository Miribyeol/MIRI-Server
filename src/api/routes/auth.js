const { Router } = require("express");
const router = Router();
const { checkJwt } = require("../middlewares/checkJwt");
const {
    getUser,
    generateAccessToken,
    generateRefreshToken,
} = require("../../services/auth");

router.post("/login", async (req, res) => {
    const access_token = req.body.access_token;
    try {
        const userId = await getUser(access_token);
        console.log(userId);

        const accessToken = await generateAccessToken(userId);
        const refreshToken = await generateRefreshToken();
        console.log(accessToken);
        console.log(refreshToken);

        res.status(200).json({ login: "success", accessToken, refreshToken });
    } catch (err) {
        res.status(500).json({ login: "fail" });
    }
});

module.exports = router;
