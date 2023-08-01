const ForumPost = require("../models/forumPost.model");
Parse.Cloud.beforeSave('ForumPost', async (request) => {
    const object = request.object;
    const fields = ForumPost.schema.fields;

    for (const field in fields) {
        const fieldConfig = fields[field];
        if (fieldConfig.required && !object.has(field)) {
            throw new Parse.Error(Parse.Error.INVALID_JSON, `Missing required field: ${field}.`);
        }

        if (object.has(field) && typeof object.get(field) !== fieldConfig.type.toLowerCase()) {
            throw new Parse.Error(Parse.Error.INVALID_JSON, `Invalid data type for field: ${field}.`);
        }
    }
});