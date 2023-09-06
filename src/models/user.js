const Sequelize = require("sequelize");

class User extends Sequelize.Model {
    static initiate(sequelize) {
        User.init(
            {
                email: {
                    type: Sequelize.STRING(40),
                    allowNull: false,
                    unique: true,
                },
                nickname: {
                    type: Sequelize.STRING(20),
                    allowNull: false,
                },
                gender: {
                    type: Sequelize.STRING(10),
                    allowNull: true,
                },
                ageRange: {
                    type: Sequelize.STRING(10),
                    allowNull: true,
                },
                snsId: {
                    type: Sequelize.STRING(30),
                    allowNull: false,
                    unique: true,
                },
            },
            {
                sequelize,
                timestamps: true,
                underscored: true,
                modelName: "User",
                tableName: "users",
                paranoid: true,
                charset: "utf8mb4",
                collate: "utf8mb4_general_ci",
            }
        );
    }

    static associate(db) {
        db.User.hasOne(db.Pet, {
            foreignKey: "userId",
            sourceKey: "id",
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
        });
        db.User.hasOne(db.ChallengerStatus, {
            foreignKey: "userId",
            sourceKey: "id",
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
        });
    }
}

module.exports = User;
