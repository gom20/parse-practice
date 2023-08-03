const express = require('express');
const router = express.Router();
const forumPostController = require('../controllers/api/forumPost.controller');

router.post( '/', forumPostController.createForumPost);

router.get( '/', forumPostController.getForumPosts);

router.get('/:id', forumPostController.getForumPost);

router.put('/:id', forumPostController.updateForumPost);

router.delete('/:id', forumPostController.deleteForumPost);

module.exports = router;