const Post = require("../models/post");

exports.getPosts = async () => {
    try {
        const posts = await Post.findAll({
            attributes: ["title", "content", "author"],
            order: [["updatedAt", "DESC"]],
            limit: 3,
        });
        return posts;
    } catch (err) {
        console.log(err);
    }
};
