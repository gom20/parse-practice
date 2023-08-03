const ApiError = require("../errors/ApiError");
const errorCodes = require("../errors/errorCodes");
async function sessionChecker(req, res, next) {
    const sessionToken = req.headers['x-parse-session-token'];
    if (!sessionToken) {
        return next(new ApiError(errorCodes.SESSION_TOKEN_MISSING));
    }

    try {
        const session = await new Parse.Query('_Session')
            .equalTo('sessionToken', sessionToken)
            .include('user')
            .first({ useMasterKey: true });
        if(!session){
            return next(new ApiError(errorCodes.INVALID_SESSION_TOKEN));
        }
        req.user = session.get('user').toJSON();
        return next();
    } catch (error) {
        console.error(error);
        return next(new ApiError(errorCodes.INVALID_SESSION_TOKEN));
    }
}

module.exports = sessionChecker;