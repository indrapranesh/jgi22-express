const Sequelize = require('sequelize');
const {DATABASE_NAME,USERNAME,PASSWORD,HOST,DIALECT} =require('./db.constants');

const SurveyModel = require('../models/survey.model');
const TrapPictureModel = require('../models/trap_pictures.model')
const AuditModel = require('../models/audit.model')
const VersionModel = require('../models/version.model')
const UserModel = require('../models/user.model')
const CommentModel = require('../models/comment.model')
const TrapImagesModel = require('../models/trap_images.model')

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
    Audit = AuditModel(sequelize, Sequelize),
    Version = VersionModel(sequelize, Sequelize),
    User = UserModel(sequelize, Sequelize),
    Comment = CommentModel(sequelize, Sequelize),
    TrapImage = TrapImagesModel(sequelize, Sequelize)

Comment.belongsTo(User);

sequelize.sync({ force: false })
.then(() => {
})


module.exports = {
    Survey,
    TrapPicture,
    Audit, 
    Version,
    User,
    Comment,
    TrapImage
}