const dotenv = require("dotenv");
// config() will read your .env file, parse the contents, assign it to process.env.
dotenv.config();

module.exports = {
    port: parseInt(process.env.PORT),
    database: {
        username: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME,
        host: process.env.DATABASE_HOST,
        dialect: process.env.DATABASE_DIALECT,
        timezone: process.env.DATABASE_TIMEZONE,
    },
    jwt: {
        secret: process.env.JWT_SECRET,
        expiresIn: process.env.JWT_EXPIRES_IN,
    },
};
