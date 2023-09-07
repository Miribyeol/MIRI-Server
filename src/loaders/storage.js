const fs = require("fs");
const config = require("../config");

module.exports = () => {
    try {
        fs.readdirSync(config.imageStorage);
    } catch (err) {
        console.log("Create pet image storage.");
        fs.mkdirSync(config.imageStorage);
    }
};
