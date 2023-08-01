const ForumPost = require("../models/forumPost.model");
const ApiError = require("../errors/ApiError");
const errorCodes = require("../errors/errorCodes");

async function createForumPost(data) {
    const forumPost = new ForumPost();
    Object.keys(data).forEach(key => forumPost.set(key, data[key]));
    return forumPost.save();
}

async function getAllForumPosts() {
    const query = new Parse.Query(ForumPost);
    return query.find();
}

async function getForumPostById(id) {
    const query = new Parse.Query(ForumPost);
    return query.get(id);
}

async function updateForumPostById(id, data) {
    const query = new Parse.Query(ForumPost);
    const forumPost = await query.get(id);
    Object.keys(data).forEach(key => forumPost.set(key, data[key]));
    return forumPost.save();
}

async function deleteForumPostById(id) {
    const query = new Parse.Query(ForumPost);
    const forumPost = await query.get(id);
    forumPost.set('isDeleted', true);
    return forumPost.save();
}

module.exports = {
    createForumPost,
    getAllForumPosts,
    getForumPostById,
    updateForumPostById,
    deleteForumPostById
};