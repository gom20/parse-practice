const ApiError = require("../errors/ApiError");
const ApiResponse = require("../models/ApiResponse");
const errorCodes = require("../errors/errorCodes");

function errorHandler(err, req, res, next) {
    console.error(err);
    if (err instanceof ApiError) {
        res.status(err.statusCode).json(ApiResponse.error(err.code, err.message));
    } else {
        res.status(errorCodes.INTERNAL_SERVER_ERROR.statusCode)
            .json(ApiResponse.error(errorCodes.INTERNAL_SERVER_ERROR.code, err.message));
    }
}

module.exports = errorHandler;