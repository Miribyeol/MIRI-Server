const { Router } = require("express");
const auth = require("./auth");
const user = require("./user");
const pet = require("./pet");
const main = require("./main");
const challenge = require("./challenge");
const router = Router();

router.use("/auth", auth);
router.use("/user", user);
router.use("/pet", pet);
router.use("/main", main);
router.use("/challenge", challenge);

module.exports = router;
