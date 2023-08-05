const Sequelize = require("sequelize");
const config = require("../config");

const db = {};
const sequelize = new Sequelize(
    config.database.database,
    config.database.username,
    config.database.password,
    config.database
);
db.sequelize = sequelize;

module.exports = db;
