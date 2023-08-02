const ForumPostService = require('../../services/forumPost.service');
const asyncWrapper = require("../../utils/asyncWrapper");
async function renderDiscussionBoard(req, res) {
    const formPost = await ForumPostService.createForumPost(req.body);
    return res.render()
}

module.exports = {

};