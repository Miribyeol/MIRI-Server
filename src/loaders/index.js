const sequelizeLoader = require("./sequelize");
const expressLoader = require("./express");
const checkImageStorage = require("./storage");

const loaders = async (app) => {
    try {
        await sequelizeLoader();
        console.log("Database Initialized");

        require("./redis");
        console.log("Redis Initialized");

        expressLoader(app);
        console.log("Express Initialized");

        checkImageStorage();
    } catch (err) {
        console.log(err);
    }
};

module.exports = loaders;
