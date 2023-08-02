const ForumPostService = require('../../services/forumPost.service');
const asyncWrapper = require("../../utils/asyncWrapper");
async function createForumPost(req, res) {
    const formPost = await ForumPostService.createForumPost(req.body);
    res.json(formPost);
}

async function getForumPosts(req, res) {
    const forumPosts = await ForumPostService.getAllForumPosts();
    res.json(forumPosts);
}

async function getForumPost(req, res) {
    const postId = req.params.postId;
    const forumPost = await ForumPostService.getForumPostById(postId);
    res.json(forumPost);
}

async function updateForumPost(req, res) {
    const postId = req.params.postId;
    const updatedForumPost = await ForumPostService.updateForumPostById(postId, req.body);
    res.json(updatedForumPost);
}

async function deleteForumPost(req, res) {
    const postId = req.params.postId;
    await ForumPostService.deleteForumPostById(postId);
    res.json({postId: postId});
}

async function likeForumPost(req, res) {
    const postId = req.params.postId;
    await ForumPostService.likeForumPost(postId);
    res.json({postId: postId});
}

module.exports = {
    createForumPost: asyncWrapper(createForumPost),
    getForumPosts: asyncWrapper(getForumPosts),
    getForumPost: asyncWrapper(getForumPost),
    updateForumPost: asyncWrapper(updateForumPost),
    deleteForumPost: asyncWrapper(deleteForumPost),
    likeForumPost: asyncWrapper(likeForumPost)
};