const { Audit } = require("../db/db.config");

const auditController = exports;

auditController.getAllAudits = async(req, res) => {
    try {
        let audits = await Audit.findAll();
        return res.status(200).send(audits);
    } catch(err) {
        res.send(err);
    }
}

auditController.createAudit = async(req, res) => {
    try {
        const audit = await Audit.create(req.body)
        return res.status(200).send(audit);
    } catch(err) {
        res.send(err);
    }
}

auditController.getAudit = async(req, res) => {
    try {
        const id = req.params.id;
        const audit = await Audit.findOne({where: {id: id}})
        return res.status(200).send(audit);
    } catch(err) {
        res.send(err);
    }
}