const { Router } = require("express");
const auth = require("./auth");
const user = require("./user");
const pet = require("./pet");
const main = require("./main");
const router = Router();

router.use("/auth", auth);
router.use("/user", user);
router.use("/pet", pet);
router.use("/main", main);

module.exports = router;
