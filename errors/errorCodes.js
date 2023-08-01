const errorCodes = {
    INTERNAL_SERVER_ERROR: {
        code: 100,
        message: 'Internal Server Error.',
        statusCode: 500,
    },
    FORUM_POST_NOT_FOUND: {
        code: 101,
        message: 'ForumPost Not Found.',
        statusCode: 404,
    },
    INVALID_CREDENTIALS: {
        code: 102,
        message: 'Invalid Credentials.',
        statusCode: 403
    },
    SESSION_TOKEN_MISSING: {
        code: 103,
        message: 'Session token is missing.',
        statusCode: 401
    },
    INVALID_SESSION_TOKEN: {
        code: 104,
        message: 'Invalid session token.',
        statusCode: 401
    },
    ERROR_VERIFYING_SESSION_TOKEN: {
        code: 105,
        message: 'Error verifying session token.',
        statusCode: 500
    }
};

module.exports = errorCodes;