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
        return res.status(200).send({});
    } catch(err) {
        console.log(err);
        return res.status(500).send({})
    } 
}