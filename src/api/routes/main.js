const { Router } = require("express");
const router = Router();
const { checkJwt } = require("../middlewares/checkJwt");
const { getChallengerStep } = require("../../services/challenge");
const { getEmotions } = require("../../services/emotion");
const { getPosts } = require("../../services/post");
const {
    GET_MAIN_SUCCESS,
    GET_MAIN_FAIL,
} = require("../../util/response/message");
const response = require("../../util/response");

router.get("/", checkJwt, async (req, res, next) => {
    try {
        const userId = req.userId;
        const challengerStep = await getChallengerStep(userId);
        const emotions = await getEmotions();
        const posts = await getPosts();
        if (!challengerStep || !emotions || !posts) {
            return res.status(400).json(response.response400(GET_MAIN_FAIL));
        }
        return res.status(200).json(
            response.response200(GET_MAIN_SUCCESS, {
                challengerStep,
                emotions,
                posts,
            })
        );
    } catch (err) {
        console.log(err);
        return next(err);
    }
});

module.exports = router;
