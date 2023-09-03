const { Router } = require("express");
const router = Router();
const { checkJwt } = require("../middlewares/checkJwt");
const { uploadImage } = require("../middlewares/multer");
const { getPetInfo, createPet, updatePet } = require("../../services/pet");
const {
    CHECK_PET_EXIST_SUCCESS,
    CHECK_PET_EXIST_FAIL,
    GET_PET_INFO_SUCCESS,
    GET_PET_INFO_FAIL,
    POST_PET_INFO_SUCCESS,
    POST_PET_INFO_FAIL,
    POST_PET_IMAGE_SUCCESS,
    POST_PET_IMAGE_FAIL,
    EXIST_PET,
    PUT_PET_INFO_SUCCESS,
    PUT_PET_INFO_FAIL,
} = require("../../util/response/message");
const response = require("../../util/response");

router.get("/", checkJwt, async (req, res, next) => {
    try {
        const userId = req.userId;
        const petInfo = await getPetInfo(userId);
        if (!petInfo) {
            return res
                .status(400)
                .json(response.response404(GET_PET_INFO_FAIL));
        }
        return res
            .status(200)
            .json(response.response200(GET_PET_INFO_SUCCESS, { petInfo }));
    } catch (err) {
        console.log(err);
        return next(err);
    }
});

router.post("/", checkJwt, async (req, res, next) => {
    try {
        const userId = req.userId;
        const petInfo = req.body;
        const existPet = await getPetInfo(userId);
        if (existPet) {
            return res.status(409).json(response.response409(EXIST_PET));
        }

        const createdPet = await createPet(userId, petInfo);
        if (!createdPet) {
            return res
                .status(400)
                .json(response.response400(POST_PET_INFO_FAIL));
        }
        return res.status(201).json(
            response.response201(POST_PET_INFO_SUCCESS, {
                petInfo: createdPet,
            })
        );
    } catch (err) {
        console.log(err);
        return next(err);
    }
});

router.put("/", checkJwt, async (req, res, next) => {
    try {
        const userId = req.userId;
        const petInfo = req.body;
        const updatedPet = await updatePet(userId, petInfo);
        if (!updatedPet) {
            return res
                .status(400)
                .json(response.response400(PUT_PET_INFO_FAIL));
        }
        return res.status(201).json(
            response.response201(PUT_PET_INFO_SUCCESS, {
                petInfo: updatedPet,
            })
        );
    } catch (err) {
        console.log(err);
        return next(err);
    }
});

router.post("/image", uploadImage, (req, res, next) => {
    try {
        const filename = req.file == undefined ? null : req.file.filename;
        if (!filename) {
            return res
                .status(400)
                .json(response.response400(POST_PET_IMAGE_FAIL));
        }
        return res.status(201).json(
            response.response201(POST_PET_IMAGE_SUCCESS, {
                filename,
            })
        );
    } catch (err) {
        console.log(err);
        return next(err);
    }
});

router.get("/check", checkJwt, async (req, res, next) => {
    try {
        const userId = req.userId;
        const petInfo = await getPetInfo(userId);
        if (!petInfo) {
            return res
                .status(404)
                .json(response.response404(CHECK_PET_EXIST_FAIL));
        }
        return res
            .status(200)
            .json(response.response200(CHECK_PET_EXIST_SUCCESS));
    } catch (err) {
        console.log(err);
        return next(err);
    }
});

module.exports = router;
