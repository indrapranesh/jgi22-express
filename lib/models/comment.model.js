module.exports = (sequelize, type) => {
    return sequelize.define(
      "Comment",
      {
        id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        audit_id: {
            type: type.INTEGER,
            references: {
               model: 'Audits', 
               key: 'id',
            }
        },
        user_id: {
            type: type.INTEGER,
            references: {
               model: 'Users', 
               key: 'id',
            }
        },
        comment: {
            type: type.STRING,
        },
        createdAt: {
            allowNull: false,
            type: type.DATE
        },
        updatedAt: {
            allowNull: false,
            type: type.DATE
        }
    },
    {
      timestamps: true,
      underscrored: false,
      createdAt: "createdAt",
      updatedAt: "updatedAt"
    }
    );
  };
  