module.exports = {
    response200: (message, data) => ({
        success: true,
        message,
        result: data,
    }),
    response201: (message, data) => ({
        success: true,
        message,
        result: data,
    }),
    response400: (message) => ({
        success: false,
        message,
    }),
    response401: (message) => ({
        success: false,
        message,
    }),
    response403: (message) => ({
        success: false,
        message,
    }),
    response404: (message) => ({
        success: false,
        message,
    }),
    response409: (message) => ({
        success: false,
        message,
    }),
};
