const { Router } = require("express");
const router = Router();
const { getUserProfileByKakao } = require("../services/auth");

router.post("/login", async (req, res) => {
    try {
        console.log(req.body);
        const userProfile = await getUserProfileByKakao(req.body.access_token);
        console.log(userProfile);

        res.status(201).json({ login: "success" });
    } catch (err) {
        res.status(500).json({ login: "fail" });
    }
});

module.exports = router;
