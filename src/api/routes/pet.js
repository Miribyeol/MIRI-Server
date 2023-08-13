const { Router } = require("express");
const router = Router();
const { checkJwt } = require("../middlewares/checkJwt");
const { checkPetExist } = require("../../services/pet");

router.get("/check", async (req, res) => {
    try {
        const userId = req.body.userId;
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
