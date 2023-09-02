const { Router } = require("express");
const router = Router();
const { checkJwt } = require("../middlewares/checkJwt");
const { updateChallengerStep } = require("../../services/challenge");
const {
    PATCH_CHALLENGE_STATUS_SUCCESS,
    PATCH_CHALLENGE_STATUS_FAIL,
} = require("../../util/response/message");
const response = require("../../util/response");

router.patch("/status", checkJwt, async (req, res, next) => {
    try {
        const userId = req.userId;
        const challengeStep = req.body.challengeStep;
        if (challengeStep > 14) {
            return res
                .status(400)
                .json(response.response400(PATCH_CHALLENGE_STATUS_FAIL));
        }
        const updatedStep = await updateChallengerStep(userId, challengeStep);
        if (!updatedStep) {
            return res
                .status(400)
                .json(response.response400(PATCH_CHALLENGE_STATUS_FAIL));
        }
        return res.status(201).json(
            response.response201(PATCH_CHALLENGE_STATUS_SUCCESS, {
                challengeStep: updatedStep,
            })
        );
    } catch (err) {
        console.log(err);
        return next(err);
    }
});

module.exports = router;
