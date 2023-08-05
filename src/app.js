const loaders = require("./loaders");
const config = require("./config");
const express = require("express");

async function startServer() {
    const app = express();

    await loaders.init({ expressApp: app });

    app.listen(config.port, (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(`Server listening on port: ${config.port}`);
    });
}

// Run the async function to start server
startServer();
