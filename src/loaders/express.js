const express = require("express");
const config = require("../config");
const routes = require("../routes");

module.exports = (app) => {
    // Health Check endpoints
    app.get("/status", (req, res) => {
        res.status(200).end();
    });
    app.head("/status", (req, res) => {
        res.status(200).end();
    });

    app.use(require("morgan")("dev"));
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    // Load API routes
    app.use("", routes);

    // Route not found error handler
    app.use((req, res, next) => {
        const err = new Error("Not Found");
        err.status = 404;
        next(err);
    });

    // Error handler
    app.use((err, req, res, next) => {
        res.status(err.status || 500);
        res.json({
            errors: {
                message: err.message,
            },
        });
    });
};
