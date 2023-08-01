const ForumPost = Parse.Object.extend('ForumPost', {
    // Custom methods (if any)
});

ForumPost.schema = {
    className: 'ForumPost',
    fields: {
        objectId: { type: 'String', required: false },
        creator: { type: 'String', required: false },
        postText: { type: 'String', required: true },
        updatedAt: { type: 'Date', required: false },
        isDeleted: { type: 'Boolean', required: false },
    },
};

module.exports = ForumPost;