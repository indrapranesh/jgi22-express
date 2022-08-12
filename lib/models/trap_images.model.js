module.exports = (sequelize, type) => {
    return sequelize.define(
      "trap_images",
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
        audit_id: {
            type: type.INTEGER,
            references: {
               model: 'Audits', 
               key: 'id',
            }
        },
        url: {
            type: type.TEXT,
        },
      },
      {
        timestamps: false
      }
    );
  };
  