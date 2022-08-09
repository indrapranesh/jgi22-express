const { Survey } = require("../db/db.config");

const trapsController = exports;

trapsController.getActiveTraps = async(req, res) => {
    try {
        let audits = await Survey.findAll({
            where: {
                reviewed: false
            }
        });
        return res.status(200).send(audits);
    } catch(err) {
        res.send(err);
    }
}