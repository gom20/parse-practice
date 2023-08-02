const express = require('express');
const router = express.Router();
const forumPostController = require('../controllers/api/forumPost.controller');

router.post( '/', forumPostController.createForumPost);

router.get( '/', forumPostController.getForumPosts);

router.get('/:postId', forumPostController.getForumPost);

router.put('/:postId', forumPostController.updateForumPost);

router.delete('/:postId', forumPostController.deleteForumPost);

router.post('/:postId/like', forumPostController.likeForumPost);

router.post('/business/discussion/:campaignId', forumPostController.likeForumPost);

module.exports = router;