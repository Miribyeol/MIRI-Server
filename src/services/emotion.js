const Emotion = require("../models/emotion");

exports.getEmotions = async () => {
    try {
        const emotions = await Emotion.findAll({
            attributes: ["emotion", "count"],
            order: [["count", "DESC"]],
            limit: 10,
        });
        return emotions;
    } catch (err) {
        console.log(err);
    }
};
