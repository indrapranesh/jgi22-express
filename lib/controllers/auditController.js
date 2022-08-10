const { Audit, Version, User } = require("../db/db.config");

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

auditController.getVersionsByAudit = async(req, res) => {
    try {
        const id = req.params.id;
        const versions = await Version.findAll({where: {
            audit_id: id
        },
        order: [
            ['createdAt', 'DESC'],
        ],
    });
    versions[0].version = `${versions[0].version} (latest)`
        const response = {
            versions: versions,
            latest: versions[0]
        }
        return res.status(200).send(response)
    } catch(err) {
        res.send(err);
    }
}

auditController.getUsers = async(req, res) => {
    try {
        let audits = await User.findAll();
        return res.status(200).send(audits);
    } catch(err) {
        res.send(err);
    }
}

auditController.createUser = async(req, res) => {
    try {
        const audit = await User.create(req.body)
        return res.status(200).send(audit);
    } catch(err) {
        res.send(err);
    }
}