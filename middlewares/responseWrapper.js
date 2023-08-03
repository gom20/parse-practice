const ApiResponse = require("../models/ApiResponse");

function responseWrapper(req, res, next) {
    res.sendResponse = function (data) {
        res.status(200).json(ApiResponse.success(data));
    };

    next();
}

module.exports = responseWrapper;