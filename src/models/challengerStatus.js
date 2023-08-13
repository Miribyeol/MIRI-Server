const Sequelize = require("sequelize");

class ChallengerStatus extends Sequelize.Model {
    static initiate(sequelize) {
        ChallengerStatus.init(
            {
                userId: {
                    type: Sequelize.INTEGER,
                    primaryKey: true,
                },
                challengeStep: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                },
            },
            {
                sequelize,
                timestamps: true,
                underscored: true,
                modelName: "ChallengerStatus",
                tableName: "challengers_status",
                paranoid: false,
                charset: "utf8mb4",
                collate: "utf8mb4_general_ci",
            }
        );
    }

    static associate(db) {
        db.ChallengerStatus.belongsTo(db.User, {
            foreignKey: "userId",
            targetKey: "id",
        });
        db.ChallengerStatus.belongsTo(db.Challenge, {
            foreignKey: "challengeStep",
            targetKey: "id",
        });
    }
}

module.exports = ChallengerStatus;
