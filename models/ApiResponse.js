class ApiResponse {
    static success(data) {
        return {
            code: 0,
            message: 'Success',
            data: data
        };
    }

    static error(code, message) {
        return {
            code: code,
            message: message,
            data: null
        };
    }
}

module.exports = ApiResponse;