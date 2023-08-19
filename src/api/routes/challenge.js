const { Router } = require("express");
const router = Router();
const { checkJwt } = require("../middlewares/checkJwt");
const { updateChallengerStep } = require("../../services/challengerStatus");

router.patch("/status", checkJwt, async (req, res) => {
    try {
        const userId = req.userId;
        const challengeStep = req.body.challengeStep;
        const update = await updateChallengerStep(userId, challengeStep);

        const result = {
            success: true,
            message: "요청에 성공하였습니다.",
        };
        return res.status(201).json(result);
    } catch (err) {
        console.log(err);
        const result = {
            success: false,
            message: "요청에 실패하였습니다.",
        };
        return res.status(400).json(result);
    }
});

module.exports = router;
