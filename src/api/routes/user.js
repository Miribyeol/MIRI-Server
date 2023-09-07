const { Router } = require("express");
const router = Router();
const { checkJwt } = require("../middlewares/checkJwt");
const { getUserNickname, changeUserNickname } = require("../../services/user");
const {
    GET_NICKNAME_SUCCESS,
    GET_NICKNAME_FAIL,
    PATCH_NICKNAME_SUCCESS,
    PATCH_NICKNAME_FAIL,
} = require("../../util/response/message");
const response = require("../../util/response");

router.get("/nickname", checkJwt, async (req, res, next) => {
    try {
        const userId = req.userId;
        const nickname = await getUserNickname(userId);
        if (!nickname) {
            return res
                .status(400)
                .json(response.response404(GET_NICKNAME_FAIL));
        }
        return res
            .status(200)
            .json(response.response200(GET_NICKNAME_SUCCESS, { nickname }));
    } catch (err) {
        console.log(err);
        return next(err);
    }
});

router.patch("/nickname", checkJwt, async (req, res, next) => {
    try {
        const userId = req.userId;
        const nickname = req.body.nickname;
        const changedNickname = await changeUserNickname(userId, nickname);
        if (!changedNickname) {
            return res
                .status(400)
                .json(response.response400(PATCH_NICKNAME_FAIL));
        }
        return res.status(200).json(
            response.response200(PATCH_NICKNAME_SUCCESS, {
                nickname: changedNickname,
            })
        );
    } catch (err) {
        console.log(err);
        return next(err);
    }
});

module.exports = router;
