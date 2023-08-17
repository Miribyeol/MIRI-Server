const { Router } = require("express");
const router = Router();
const { checkJwt } = require("../middlewares/checkJwt");
const { getPetInfo, createPet, checkPetExist } = require("../../services/pet");

router.get("/", checkJwt, async (req, res) => {
    try {
        const userId = req.userId;
        const petInfo = await getPetInfo(userId);
        return res.status(200).json({ petInfo });
    } catch (err) {
        return res.status(500).json({ error: err });
    }
});

router.post("/", checkJwt, async (req, res) => {
    try {
        const userId = req.userId;
        const petInfo = req.body;
        const create = await createPet(userId, petInfo);
        const result = {
            success: true,
            message: "반려동물 등록에 성공하였습니다.",
        };
        if (create) {
            return res.status(201).json(result);
        }
    } catch (err) {
        console.log(err);
        const result = {
            success: false,
            message: "반려동물 등록에 실패하였습니다.",
        };
        return res.status(400).json(result);
    }
});

router.get("/check", checkJwt, async (req, res) => {
    try {
        const userId = req.userId;
        const exist = await checkPetExist(userId);
        if (exist) {
            return res.status(200).json({ exist: true });
        } else {
            return res.status(200).json({ exist: false });
        }
    } catch (err) {
        return res.status(500).json({ error: err });
    }
});

module.exports = router;
