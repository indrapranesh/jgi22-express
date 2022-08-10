module.exports = (sequelize, type) => {
    return sequelize.define('Version', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        version: {
            type: type.STRING
        },
        audit_id: {
            type: type.INTEGER,
            references: {
               model: 'Audits', 
               key: 'id',
            }
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
    )
}
