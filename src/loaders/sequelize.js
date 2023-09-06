const db = require("../models");
const { challengeData, emotionData } = require("./seeder");

module.exports = async () => {
    await db.sequelize.sync({ force: false });
    challengeData();
    emotionData();
};
