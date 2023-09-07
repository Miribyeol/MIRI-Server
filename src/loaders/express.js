const express = require("express");
const morgan = require("morgan");
const routes = require("../api/routes");
const config = require("../config");
const path = require("path");
const root = process.cwd();

module.exports = (app) => {
    /* Health Check */
    app.get("/status", (req, res) => {
        res.status(200).send("Hello MIRI!");
    });

    /* Morgan Request Logger */
    app.use(morgan(process.env.NODE_ENV === "production" ? "combined" : "dev"));

    /* Static Files */
    app.use("/pet/image", express.static(path.join(root, config.imageStorage)));

    /* Request Data */
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    /* Routes */
    app.use("", routes);

    /* Catch 404 and Forward to error handler */
    app.use((req, res, next) => {
        const err = new Error("Not Found");
        err.status = 404;
        next(err);
    });

    /* Error handler */
    app.use((err, req, res) => {
        res.status(err.status || 500).json({
            errors: {
                message: err.message,
            },
        });
    });
};
