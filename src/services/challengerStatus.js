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

module.exports = exports;
