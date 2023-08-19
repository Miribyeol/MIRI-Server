const { Router } = require("express");
const router = Router();
const { checkJwt } = require("../middlewares/checkJwt");
const { getChallengerStep } = require("../../services/challenge");
const { getEmotions } = require("../../services/emotion");
const { getPosts } = require("../../services/post");

router.get("/", checkJwt, async (req, res) => {
    try {
        const userId = req.userId;
        const challengerStep = await getChallengerStep(userId);
        const emotion = await getEmotions();
        const posts = await getPosts();

        const result = {
            success: true,
            message: "요청에 성공하였습니다.",
            result: { challengerStep, emotion, posts },
        };

        return res.status(200).json(result);
    } catch (err) {
        console.log(err);
        const result = {
            success: false,
            message: "요청에 실패하였습니다.",
        };
        return res.status(404).json(result);
    }
});

module.exports = router;
