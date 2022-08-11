const { User } = require('../db/db.config');

const nodemailer = require('nodemailer');
const emailTemplate = require('../templates/review')
const mailController = exports;

const username = process.env.MAIL_USERNAME;
const password = process.env.MAIL_PASSWORD;

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: username,
        pass: password
    }
});

console.log(username, password)
    

mailController.sendReviewMail = async(req, res) => {
    try {
        const users = await User.findAll();
        const auditId = req.query.auditId;
        for(let i=0; i<users?.length; i++) {
            const mailOptions = {
                from: 'GeoTagger Admin',
                to: users[i].email,
                subject: 'Camera Traps Review',
                html: emailTemplate.reviewEmail(auditId, users[i].id)
            };
            await transporter.sendMail(mailOptions);
        }
        return res.status(200).send({});
    } catch(err) {
        res.send(err);
    }
}