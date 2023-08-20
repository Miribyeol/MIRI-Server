const Pet = require("../models/pet");

exports.getPetInfo = async (userId) => {
    const petInfo = await Pet.findOne({
        attributes: ["name", "species", "birthday", "deathday"],
        where: { userId: userId },
    });
    if (!petInfo) {
        return null;
    }
    return petInfo;
};

exports.createPet = async (userId, petInfo) => {
    const createdPet = await Pet.create({
        species: petInfo.species,
        name: petInfo.name,
        birthday: petInfo.birthday,
        deathday: petInfo.deathday,
        userId: userId,
    });
    if (!createdPet) {
        return null;
    }

    const createdPetInfo = {
        species: createdPet.species,
        name: createdPet.name,
        birthday: createdPet.birthday,
        deathday: createdPet.deathday,
    };
    return createdPetInfo;
};

exports.updatePet = async (userId, petInfo) => {
    const updatedPet = await Pet.findOne({
        where: { userId: userId },
    });
    if (!updatedPet) {
        return null;
    }
    updatedPet.species = petInfo.species;
    updatedPet.name = petInfo.name;
    updatedPet.birthday = petInfo.birthday;
    updatedPet.deathday = petInfo.deathday;
    await updatedPet.save();

    const updatedPetInfo = {
        species: updatedPet.species,
        name: updatedPet.name,
        birthday: updatedPet.birthday,
        deathday: updatedPet.deathday,
    };
    return updatedPetInfo;
};
