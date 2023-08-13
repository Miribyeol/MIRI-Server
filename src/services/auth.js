const axios = require("axios");
const jwt = require("jsonwebtoken");
const config = require("../config");
const User = require("../models/user");
const ChallengerStatus = require("../models/challengerStatus");

exports.getUserByKakao = async (accessToken) => {
    try {
        const result = await axios.get("https://kapi.kakao.com/v2/user/me", {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });

        const userProfile = result.data;
        const exUser = await User.findOne({ where: { snsId: userProfile.id } });

        if (exUser) {
            return [exUser, false];
        } else {
            const hasGender = () => {
                if (userProfile.kakao_account.has_gender) {
                    return userProfile.kakao_account.gender;
                } else {
                    return null;
                }
            };
            const hasAgeRange = () => {
                if (userProfile.kakao_account.has_age_range) {
                    return userProfile.kakao_account.age_range;
                } else {
                    return null;
                }
            };

            const newUser = await User.create({
                email: userProfile.kakao_account.email,
                nickname: userProfile.kakao_account.profile.nickname,
                gender: hasGender(),
                ageRange: hasAgeRange(),
                snsId: userProfile.id,
            });
            await ChallengerStatus.create({
                userId: newUser.id,
                challengeStep: 1,
            });
            return [newUser, true];
        }
    } catch (err) {
        console.log(err);
    }
};

exports.generateToken = async (user) => {
    try {
        const userId = user.id;
        const token = jwt.sign({ userId }, config.jwt.secret, {
            expiresIn: config.jwt.expiresIn,
        });
        return token;
    } catch (err) {
        console.log(err);
    }
};
