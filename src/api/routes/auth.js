const { Router } = require("express");
const router = Router();
const { checkJwt } = require("../middlewares/checkJwt");
const { getUserByKakao, generateToken } = require("../../services/auth");

router.post("/login", async (req, res) => {
    try {
        const access_token = req.body.access_token;
        const [user, created] = await getUserByKakao(access_token);

        const token = await generateToken(user);

        return res.status(created ? 201 : 200).json({
            login: "success",
            token: token,
        });
    } catch (err) {
        return res.status(500).json({ login: "fail" });
    }
});

router.get("/check", checkJwt, async (req, res) => {
    const userId = req.userId;
    return res.status(200).json({
        login: "success",
        userId: userId,
    });
});

module.exports = router;
