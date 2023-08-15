const { Router } = require("express");
const router = Router();
const { checkJwt } = require("../middlewares/checkJwt");
const { getUserNickname, changeUserNickname } = require("../../services/user");

router.get("/nickname", checkJwt, async (req, res) => {
    try {
        const userId = req.userId;
        const nickname = await getUserNickname(userId);

        return res.status(200).json({ nickname: nickname });
    } catch (err) {
        return res.status(500).json({ nickname: "fail" });
    }
});

router.patch("/nickname", checkJwt, async (req, res) => {
    try {
        const userId = req.userId;
        const nickname = req.body.nickname;

        const result = await changeUserNickname(userId, nickname);

        if (result) {
            return res.status(200).json({ changeNickname: "success" });
        }
    } catch (err) {
        return res.status(500).json({ changeNickname: "fail" });
    }
});

module.exports = router;
