class ApiError extends Error {
    constructor(errorCode) {
        super(errorCode.message);
        this.name = this.constructor.name;
        this.code = errorCode.code;
        this.message = errorCode.message;
        this.statusCode = errorCode.statusCode || 500;
    }
}

module.exports = ApiError;
