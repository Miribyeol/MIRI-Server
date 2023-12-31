const Sequelize = require("sequelize");

class Emotion extends Sequelize.Model {
    static initiate(sequelize) {
        Emotion.init(
            {
                emotion: {
                    type: Sequelize.STRING(100),
                    allowNull: false,
                    unique: true,
                },
                count: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                },
            },
            {
                sequelize,
                timestamps: true,
                underscored: true,
                modelName: "Emotion",
                tableName: "emotions",
                charset: "utf8mb4",
                collate: "utf8mb4_general_ci",
            }
        );
    }

    static associate(db) {}
}

module.exports = Emotion;
