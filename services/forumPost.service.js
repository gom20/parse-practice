const ForumPostRepository = require('../repositories/forumPost.repository');

async function createForumPost(data) {
    // business logic
    // if error, throw new ApiError
    return await ForumPostRepository.create(data);
}

async function getAllForumPosts() {
    return await ForumPostRepository.findAll();
}

async function getForumPostById(id) {
    return await ForumPostRepository.findById(id);
}

async function updateForumPostById(id, data) {
    return await ForumPostRepository.updateById(id, data);
}

async function deleteForumPostById(id) {
    return await ForumPostRepository.deleteById(id);
}

module.exports = {
    createForumPost,
    getAllForumPosts,
    getForumPostById,
    updateForumPostById,
    deleteForumPostById
};