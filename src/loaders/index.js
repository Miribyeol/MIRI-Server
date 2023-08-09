const sequelizeLoader = require("./sequelize");
const expressLoader = require("./express");

const loaders = async (app) => {
    try {
        await sequelizeLoader();
        console.log("Database Initialized");

        await expressLoader(app);
        console.log("Express Initialized");
    } catch (err) {
        console.log(err);
    }
};

module.exports = loaders;
