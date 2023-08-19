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

exports.updateEmotion = (emotion) => {
    try {
        emotion.forEach(async (element) => {
            const emotionData = await Emotion.findOne({
                where: { emotion: element },
            });
            console.log(element);
            emotionData.count += 1;
            await emotionData.save();
        });

        return true;
    } catch (err) {
        console.log(err);
        return new throwError();
    }
};
