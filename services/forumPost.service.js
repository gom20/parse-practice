const ForumPostRepository = require('../repositories/forumPost.repository');
const ForumPost = require("../models/forumPost.model");
const ApiError = require("../errors/ApiError");
const errorCodes = require("../errors/errorCodes");

async function createForumPost(data) {
    return await ForumPostRepository.create(data);
}

async function getAllForumPosts() {
    return await ForumPostRepository.findAll();
}

async function getForumPostById(postId) {
    return await ForumPostRepository.findById(postId);
}

async function updateForumPostById(postId, data) {
    return await ForumPostRepository.updateById(postId, data);
}

async function deleteForumPostById(postId) {
    return await ForumPostRepository.deleteById(postId);
}

async function likeForumPost(postId) {
    return await ForumPostRepository.likeForumPost(postId);
}


module.exports = {
    createForumPost,
    getAllForumPosts,
    getForumPostById,
    updateForumPostById,
    deleteForumPostById,
    likeForumPost
};