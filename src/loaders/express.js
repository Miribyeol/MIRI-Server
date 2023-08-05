const express = require("express");

module.exports = async ({ app }) => {
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

    // Route not fount error handler
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

    // Return the express app
    return app;
};
