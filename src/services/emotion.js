const Emotion = require("../models/emotion");

exports.getEmotions = async () => {
    const emotions = await Emotion.findAll({
        attributes: ["emotion", "count"],
        order: [["count", "DESC"]],
        limit: 10,
    });
    if (!emotions) {
        return null;
    }
    return emotions;
};

exports.updateEmotion = async (emotions) => {
    const updatedEmotions = [];
    try {
        for (const element of emotions) {
            const emotion = await Emotion.findOne({
                where: { emotion: element },
            });
            emotion.count += 1;
            await emotion.save();
            updatedEmotions.push(emotion.emotion);
        }
        return updatedEmotions;
    } catch (err) {
        console.log(err);
        return null;
    }
};
