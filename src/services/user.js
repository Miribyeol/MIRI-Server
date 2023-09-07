const User = require("../models/user");

exports.getUserNickname = async (userId) => {
    const user = await User.findOne({ where: { id: userId } });
    if (!user) {
        return null;
    }

    const nickname = user.nickname;
    return nickname;
};

exports.changeUserNickname = async (userId, nickname) => {
    const changedUser = await User.findOne({ where: { id: userId } });
    if (!changedUser) {
        return null;
    }
    changedUser.nickname = nickname;
    await changedUser.save();

    const changedNickname = changedUser.nickname;
    return changedNickname;
};
