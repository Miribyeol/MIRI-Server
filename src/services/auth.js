const User = require("../models/user");
const ChallengerStatus = require("../models/challengerStatus");
const axios = require("axios");
const jwt = require("jsonwebtoken");
const config = require("../config");
const redisClient = require("../loaders/redis");

exports.getUserByKakao = async (accessToken) => {
    try {
        const getUserProfile = await axios.get(config.kakaoURL, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        const userProfile = getUserProfile.data;
        return userProfile;
    } catch (err) {
        console.log(err);
        return null;
    }
};

exports.authOrCreateUser = async (userProfile) => {
    const exUser = await User.findOne({ where: { snsId: userProfile.id } });
    if (exUser) {
        return { userId: exUser.id, isNewUser: false };
    } else {
        const hasGender = userProfile.kakao_account.has_gender
            ? userProfile.kakao_account.gender
            : null;
        const hasAgeRange = userProfile.kakao_account.has_age_range
            ? userProfile.kakao_account.age_range
            : null;

        const newUser = await User.create({
            email: userProfile.kakao_account.email,
            nickname: userProfile.kakao_account.profile.nickname,
            gender: hasGender,
            ageRange: hasAgeRange,
            snsId: userProfile.id,
        });

        await ChallengerStatus.create({
            userId: newUser.id,
            challengeStep: 0,
        });

        return { userId: newUser.id, isNewUser: true };
    }
};

exports.generateToken = async (userId) => {
    const token = jwt.sign({ userId }, config.jwt.secret, {
        expiresIn: config.jwt.expiresIn,
    });
    await redisClient.set(userId.toString(), token, {
        EX: config.redis.expireTime,
    });

    return token;
};
