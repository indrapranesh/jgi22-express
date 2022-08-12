module.exports = (sequelize, type) => {
    return sequelize.define(
      "user",
      {
        id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        name: {
          type: type.STRING,
        },
        email: {
          type: type.STRING,
        },
        designation: {
          type: type.STRING,
        },
        createdAt: {
          allowNull: false,
          type: type.DATE,
        },
        updatedAt: {
          allowNull: false,
          type: type.DATE,
        },
      },
      {
        timestamps: true,
        underscored: false,
        createdAt: "createdAt",
        updatedAt: "updatedAt",
      }
    );
  };
  