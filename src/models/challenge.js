const Sequelize = require("sequelize");

class Challenge extends Sequelize.Model {
    static initiate(sequelize) {
        Challenge.init(
            {
                id: {
                    type: Sequelize.INTEGER,
                    primaryKey: true,
                },
                title: {
                    type: Sequelize.STRING(100),
                    allowNull: false,
                },
                content: {
                    type: Sequelize.STRING(1000),
                    allowNull: false,
                },
                image: {
                    type: Sequelize.STRING(100),
                    allowNull: false,
                },
            },
            {
                sequelize,
                timestamps: true,
                underscored: true,
                modelName: "Challenge",
                tableName: "challenges",
                charset: "utf8mb4",
                collate: "utf8mb4_general_ci",
            }
        );
    }

    static associate(db) {
        db.Challenge.hasMany(db.ChallengerStatus, {
            foreignKey: "challengeStep",
            sourceKey: "id",
        });
    }
}

module.exports = Challenge;
