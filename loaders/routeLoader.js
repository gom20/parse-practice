function loadRoutes(app) {
    app.use(`/api/forumPosts`, require('../routes/forumPost.route'));
}

module.exports = loadRoutes;