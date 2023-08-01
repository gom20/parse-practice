const express = require('express');
const router = express.Router();
const forumPostController = require('../controllers/forumPost.controller');

// Create a new ForumPost
router.post( '/', forumPostController.createForumPost);

// Get all ForumPosts
router.get( '/', forumPostController.getForumPosts);

// Get a ForumPost
router.get('/:id', forumPostController.getForumPost);

// Update a ForumPost
router.put('/:id', forumPostController.updateForumPost);

// Delete a ForumPost
router.delete('/:id', forumPostController.deleteForumPost);

module.exports = router;