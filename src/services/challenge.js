const ChallengerStatus = require("../models/challengerStatus");

exports.getChallengerStep = async (userId) => {
    const challengerStatus = await ChallengerStatus.findOne({
        where: { userId: userId },
    });
    if (!challengerStatus) {
        return null;
    }
    return challengerStatus.challengeStep;
};

exports.updateChallengerStep = async (userId, challengeStep) => {
    const challengerStatus = await ChallengerStatus.findOne({
        where: { userId: userId },
    });
    if (!challengerStatus) {
        return null;
    }
    challengerStatus.challengeStep = challengeStep;
    await challengerStatus.save();

    const updatedChallengeStep = challengerStatus.challengeStep;
    return updatedChallengeStep;
};
