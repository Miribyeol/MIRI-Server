const { Router } = require("express");
const router = Router();
const { checkJwt } = require("../middlewares/checkJwt");
const { getPetInfo, checkPetExist } = require("../../services/pet");

router.get("/", checkJwt, async (req, res) => {
    try {
        const userId = req.userId;
        const petInfo = await getPetInfo(userId);
        return res.status(200).json({ petInfo });
    } catch (err) {
        return res.status(500).json({ error: err });
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
