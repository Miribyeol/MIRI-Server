const axios = require("axios");
const jwt = require("jsonwebtoken");
const config = require("../config");
const User = require("../models/user");

exports.getUser = async (accessToken) => {
    try {
        const result = await axios.get("https://kapi.kakao.com/v2/user/me", {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });

        const userProfile = result.data;
        const exUser = await User.findOne({ where: { snsId: userProfile.id } });

        if (exUser) {
            console.log("Already exist user");
            return exUser.id;
        } else {
            const newUser = await User.create({
                email: userProfile.kakao_account.email,
                nickname: userProfile.kakao_account.profile.nickname,
                gender: userProfile.kakao_account.gender,
                ageRange: userProfile.kakao_account.age_range,
                snsId: userProfile.id,
            });
            console.log("Create new user");
            return newUser.id;
        }
    } catch (err) {
        console.log(err);
        return err;
    }
};

exports.generateAccessToken = async (userId) => {
    try {
        const payload = {
            userId,
        };
        const token = jwt.sign(payload, config.jwt.secret, {
            algorithm: "HS256",
            expiresIn: "1h",
        });
        return token;
    } catch (err) {
        console.log(err);
    }
};

exports.generateRefreshToken = async () => {
    try {
        const payload = {};
        const token = jwt.sign(payload, config.jwt.secret, {
            algorithm: "HS256",
            expiresIn: "14d",
        });
        return token;
    } catch (err) {
        console.log(err);
    }
};
