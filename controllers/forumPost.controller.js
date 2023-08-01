const ForumPostService = require('../services/forumPost.service');
const asyncWrapper = require("../utils/asyncWrapper");
async function createForumPost(req, res) {
    const formPost = await ForumPostService.createForumPost(req.body);
    res.json(formPost.toJSON());
}

async function getForumPosts(req, res) {
    const forumPosts = await ForumPostService.getAllForumPosts();
    res.json(forumPosts.map((forumPost) => forumPost.toJSON()));
}

async function getForumPost(req, res) {
    const id = req.params.id;
    const forumPost = await ForumPostService.getForumPostById(id);
    res.json(forumPost.toJSON());
}

async function updateForumPost(req, res) {
    const id = req.params.id;
    const updatedForumPost = await ForumPostService.updateForumPostById(id, req.body);
    res.json(updatedForumPost.toJSON());
}

async function deleteForumPost(req, res) {
    const id = req.params.id;
    await ForumPostService.deleteForumPostById(id);
    res.json({id: id});
}

module.exports = {
    createForumPost: asyncWrapper(createForumPost),
    getForumPosts: asyncWrapper(getForumPosts),
    getForumPost: asyncWrapper(getForumPost),
    updateForumPost: asyncWrapper(updateForumPost),
    deleteForumPost: asyncWrapper(deleteForumPost)
};