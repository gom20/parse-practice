const ForumPost = require("../models/forumPost.model");

async function create(data) {
    let forumPost = new ForumPost();
    Object.keys(data).forEach(key => forumPost.set(key, data[key]));
    forumPost = await forumPost.save();
    return forumPost.toJSON();
}

async function findAll() {
    const query = new Parse.Query(ForumPost);
    let forumPosts = await query.find();
    forumPosts.map((forumPost) => forumPost.toJSON())
    return forumPosts;
}

async function findById(id) {
    const query = new Parse.Query(ForumPost);
    let forumPost = await query.get(id)
    return forumPost.toJSON();
}

async function updateById(id, data) {
    const query = new Parse.Query(ForumPost);
    let forumPost = await query.get(id);
    Object.keys(data).forEach(key => forumPost.set(key, data[key]));
    forumPost = await forumPost.save();
    return forumPost.toJSON();

}

async function deleteById(id) {
    const query = new Parse.Query(ForumPost);
    let forumPost = await query.get(id);
    forumPost.set('isDeleted', true);
    forumPost = await forumPost.save();
    return forumPost.toJSON();
}

module.exports = {
    create,
    findAll,
    findById,
    updateById,
    deleteById
};