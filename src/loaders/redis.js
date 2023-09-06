const redis = require("redis");
const config = require("../config");

const redisClient = redis.createClient({
    socket: { host: config.redis.host, port: config.redis.port },
});

redisClient.on("error", (err) => {
    console.error("Redis Client Error", err);
});

(async () => {
    await redisClient.connect();
})();

module.exports = redisClient;
