const { Router } = require("express");
const router = Router();
const { checkJwt } = require("../middlewares/checkJwt");
const { updateEmotion } = require("../../services/emotion");
const {
    PATCH_EMOTION_SUCCESS,
    PATCH_EMOTION_FAIL,
} = require("../../util/response/message");
const response = require("../../util/response");

router.patch("/", checkJwt, async (req, res, next) => {
    try {
        const emotions = req.body.emotions;
        const updatedEmotions = await updateEmotion(emotions);
        if (!updatedEmotions) {
            return res
                .status(400)
                .json(response.response400(PATCH_EMOTION_FAIL));
        }
        return res.status(201).json(
            response.response201(PATCH_EMOTION_SUCCESS, {
                emotions: updatedEmotions,
            })
        );
    } catch (err) {
        console.log(err);
        return next(err);
    }
});

module.exports = router;
