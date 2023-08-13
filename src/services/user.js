const User = require("../models/user");

exports.getUserNickname = async (userId) => {
    try {
        const user = await User.findOne({ where: { id: userId } });
        return user.nickname;
    } catch (err) {
        console.log(err);
        return new throwError();
    }
};

exports.changeUserNickname = async (userId, nickname) => {
    try {
        const user = await User.findOne({ where: { id: userId } });
        user.nickname = nickname;
        await user.save();
        return true;
    } catch (err) {
        console.log(err);
        return new throwError();
    }
};
