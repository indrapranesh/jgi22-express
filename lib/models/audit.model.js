module.exports = (sequelize, type) => {
    return sequelize.define('Audit', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: type.STRING
        },
        description: {
            type: type.TEXT
        },
        initialVersion: {
            type: type.STRING
        },
        finalVersion: {
            type: type.STRING
        },
        isCompleted: {
            type: type.BOOLEAN
        },
        finalReview: {
            type: type.BOOLEAN
        },
        mapUrl: {
            type: type.STRING
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
