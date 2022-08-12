module.exports = (sequelize, type) => {
  return sequelize.define(
    "trap_surveys",
    {
      id: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      project_name: {
        type: type.STRING,
      },
      surveyor_name: {
        type: type.STRING,
      },
      camera_id: {
        type: type.INTEGER,
      },
      setup: {
        type: type.DATE,
      },
      latitude: {
        type: type.STRING,
      },
      longitude: {
        type: type.STRING,
      },
      cam_procedure: {
        type: type.STRING,
      },
      cam_attached: {
        type: type.STRING,
      },
      cam_height: {
        type: type.INTEGER,
      },
      area_name: {
        type: type.STRING,
      },
      cam_make: {
        type: type.STRING,
      },
      cam_feature: {
        type: type.STRING,
      },
      cam_trap_test: {
        type: type.BOOLEAN,
      },
      cam_working: {
        type: type.BOOLEAN,
      },
      comments: {
        type: type.STRING,
      },
      reviewed: {
        type: type.BOOLEAN
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
