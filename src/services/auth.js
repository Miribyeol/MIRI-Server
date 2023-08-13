const axios = require("axios");
const User = require("../models/user");

exports.getUserProfileByKakao = async (accessToken) => {
    try {
        const result = await axios.get("https://kapi.kakao.com/v2/user/me", {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        return result.data;
    } catch (err) {
        console.log(err);
    }
};
