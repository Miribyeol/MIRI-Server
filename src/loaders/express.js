const express = require("express");
const morgan = require("morgan");
const routes = require("../api/routes");

module.exports = (app) => {
    /* Health Check */
    app.get("/status", (req, res) => {
        res.status(200).send("Hello MIRI!");
    });

    /* Morgan Request Logger */
    app.use(morgan("dev"));

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
                error: err,
            },
        });
    });
};
