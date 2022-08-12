const { Survey, TrapPicture } = require("../db/db.config");

const surveyController = exports;

surveyController.createSurvey = async(req, res) => {
    try {
        req.body.survey['reviewed'] = false;
        const survey = await Survey.create(req.body.survey)
        const pictures = await TrapPicture.create({
            url: req.body.trap_picture.url,
            trap_survey_id: survey.dataValues.id
        })
        res.io.emit('response', {title: 'New Trap Added', message: `Camera ${req.body.survey.camera_id} is added near ${req.body.survey.area_name}`})
        return res.status(200).send({});
    } catch(err) {
        console.log(err);
        return res.status(500).send({})
    } 
}