const ApiResponse = require("../models/ApiResponse");

function responseWrapper(req, res, next) {
    const originalJson = res.json;

    res.json = function (data) {
        if (res.statusCode === 200) {
            originalJson.call(res, ApiResponse.success(data));
        } else {
            originalJson.call(res, data);
        }
    };

    next();
}

module.exports = responseWrapper;