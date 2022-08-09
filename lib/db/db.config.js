const Sequelize = require('sequelize');
const {DATABASE_NAME,USERNAME,PASSWORD,HOST,DIALECT} =require('./db.constants');

const SurveyModel = require('../models/survey.model');
const TrapPictureModel = require('../models/trap_pictures.model')
const AuditModel = require('../models/audit.model')

const sequelize = new Sequelize(DATABASE_NAME, USERNAME, PASSWORD, {
    host: HOST,
    dialect: DIALECT,
    port: '3306',
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
})

const Survey = SurveyModel(sequelize, Sequelize),
    TrapPicture = TrapPictureModel(sequelize, Sequelize),
    Audit = AuditModel(sequelize, Sequelize)

sequelize.sync({ force: false })
.then(() => {
})


module.exports = {
    Survey,
    TrapPicture,
    Audit
}