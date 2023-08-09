const express = require("express");
const loaders = require("./loaders");
const config = require("./config");

const app = express();

const startServer = async () => {
    await loaders(app);
    app.listen(config.port, (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(`Server listening on port: ${config.port}`);
    });
};

startServer();
