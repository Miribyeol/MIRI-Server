const expressLoader = require("./express");
const { sequelize } = require("./sequelize");

module.exports = {
    init: async ({ expressApp }) => {
        try {
            await expressLoader({ app: expressApp });
            console.log("Express Initialized");

            await sequelize.sync({ force: false });
            console.log("Database Initialized");
        } catch (err) {
            console.log(err);
        }
    },
};
