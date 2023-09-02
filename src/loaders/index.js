const sequelizeLoader = require("./sequelize");
const expressLoader = require("./express");
const checkImageStorage = require("./storage");

const loaders = async (app) => {
    try {
        await sequelizeLoader();
        console.log("Database Initialized");

        await expressLoader(app);
        console.log("Express Initialized");

        await checkImageStorage();
    } catch (err) {
        console.log(err);
    }
};

module.exports = loaders;
