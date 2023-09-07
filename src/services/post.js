const Post = require("../models/post");

exports.getPosts = async () => {
    const posts = await Post.findAll({
        attributes: ["title", "content", "author"],
        order: [["updatedAt", "DESC"]],
        limit: 3,
    });
    if (!posts) {
        return null;
    }
    return posts;
};
