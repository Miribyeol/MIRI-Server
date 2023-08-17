const Pet = require("../models/pet");

exports.getPetInfo = async (userId) => {
    try {
        const petInfo = await Pet.findOne({ where: { userId: userId } });
        return petInfo;
    } catch (err) {
        console.log(err);
        return new throwError();
    }
};

exports.createPet = async (userId, petInfo) => {
    try {
        const result = await Pet.create({
            species: petInfo.species,
            name: petInfo.name,
            birthday: petInfo.birthday,
            deathday: petInfo.deathday,
            userId: userId,
        });
        return result;
    } catch (err) {
        console.log(err);
        return new throwError();
    }
};

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
