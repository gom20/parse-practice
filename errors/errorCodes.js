const errorCodes = {
    INTERNAL_SERVER_ERROR: {
        code: 1000,
        message: 'Internal Server Error.',
        statusCode: 500,
    },
    INVALID_CREDENTIALS: {
        code: 1002,
        message: 'Invalid Credentials.',
        statusCode: 403
    },
    SESSION_TOKEN_MISSING: {
        code: 1003,
        message: 'Session token is missing.',
        statusCode: 401
    },
    INVALID_SESSION_TOKEN: {
        code: 1004,
        message: 'Invalid session token.',
        statusCode: 401
    },
    ERROR_VERIFYING_SESSION_TOKEN: {
        code: 1005,
        message: 'Error verifying session token.',
        statusCode: 500
    },
    FORUM_POST_NOT_FOUND: {
        code: 2001,
        message: 'ForumPost Not Found.',
        statusCode: 404,
    },
};

module.exports = errorCodes;