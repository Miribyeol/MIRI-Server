const ChallengerStatus = require("../models/challengerStatus");

exports.getChallengerStatus = async (userId) => {
    const challengerStatus = await ChallengerStatus.findOne({
        where: { userId: userId },
    });
    if (!challengerStatus) {
        return null;
    }
    return challengerStatus.challengeStep;
};

exports.updateChallengerStatus = async (userId, challengeStep) => {
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

exports.checkChallengeStep = (challengerStep) => {
    const checkChallengerStep =
        challengerStep == null || challengerStep == undefined ? false : true;
    return checkChallengerStep;
};
