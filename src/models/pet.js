const Sequelize = require("sequelize");

class Pet extends Sequelize.Model {
    static initiate(sequelize) {
        Pet.init(
            {
                type: {
                    type: Sequelize.STRING(20),
                    allowNull: false,
                },
                name: {
                    type: Sequelize.STRING(20),
                    allowNull: false,
                },
                birthday: {
                    type: Sequelize.DATEONLY,
                    allowNull: false,
                },
                deathday: {
                    type: Sequelize.DATEONLY,
                    allowNull: false,
                },
                image: {
                    type: Sequelize.STRING(100),
                    allowNull: false,
                },
                userId: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                },
            },
            {
                sequelize,
                timestamps: true,
                underscored: true,
                modelName: "Pet",
                tableName: "pets",
                paranoid: true,
                charset: "utf8mb4",
                collate: "utf8mb4_general_ci",
            }
        );
    }

    static associate(db) {
        db.Pet.belongsTo(db.User, { foreignKey: "userId", targetKey: "id" });
    }
}

module.exports = Pet;
