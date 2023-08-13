const Pet = require("../models/pet");

exports.checkPetExist = async (userId) => {
    try {
        const pet = await Pet.findOne({ where: { userId: userId } });
        if (pet) {
            return true;
        } else {
            return false;
        }
    } catch (err) {
        console.log(err);
    }
};
