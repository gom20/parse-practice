const ForumPostModel = Parse.Object.extend('ForumPost', {
    // Custom methods (if any)
});

ForumPostModel.schema = {
    className: 'ForumPost',
    fields: {
        objectId: { type: 'String', required: false },
        creator: { type: 'String', required: false },
        postText: { type: 'String', required: true },
        isDeleted: { type: 'Boolean', required: false },
    },
};

module.exports = ForumPostModel;