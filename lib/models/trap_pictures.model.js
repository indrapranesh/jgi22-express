module.exports = (sequelize, type) => {
    return sequelize.define(
      "trap_pictures",
      {
        id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        trap_survey_id: {
            type: type.INTEGER,
            references: {
               model: 'trap_surveys', 
               key: 'id',
            }
        },
        url: {
            type: type.STRING,
        },
      },
      {
        timestamps: false
      }
    );
  };
  