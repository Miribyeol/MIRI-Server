const ChallengerStatus = require("../models/challengerStatus");

exports.getChallengerStep = async (userId) => {
    try {
        const challengerStatus = await ChallengerStatus.findOne({
            userId: userId,
        });
        return challengerStatus.challengeStep;
    } catch (err) {
        console.log(err);
        return new throwError();
    }
};

exports.updateChallengerStep = async (userId, challengeStep) => {
    try {
        const challengerStatus = await ChallengerStatus.findOne({
            userId: userId,
        });
        challengerStatus.challengeStep = challengeStep;
        await challengerStatus.save();
        return challengerStatus.challengeStep;
    } catch (err) {
        console.log(err);
        return new throwError();
    }
};

module.exports = exports;
