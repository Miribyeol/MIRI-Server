const dotenv = require("dotenv");
dotenv.config();

module.exports = {
    port: parseInt(process.env.PORT),
    imageStorage: process.env.IMAGE_STORAGE,
    kakaoURL: process.env.KAKAO_URL,
    database: {
        username: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME,
        host: process.env.DATABASE_HOST,
        dialect: process.env.DATABASE_DIALECT,
        timezone: process.env.DATABASE_TIMEZONE,
    },
    redis: {
        host: process.env.REDIS_HOST,
        port: parseInt(process.env.REDIS_PORT),
        expireTime: parseInt(process.env.REDIS_EXPIRE_TIME),
    },
    jwt: {
        secret: process.env.JWT_SECRET,
        expiresIn: process.env.JWT_EXPIRES_IN,
    },
};
