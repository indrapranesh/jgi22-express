const { Comment, User } = require("../db/db.config");

const commentsController = exports;

commentsController.createComment = async (req, res) => {
    try {
        console.log(req.body)
    const comment = await Comment.create(req.body)
        return res.status(200).send(comment);
    } catch(err) {
        res.send(err);
    }
}

commentsController.getCommentByAudit = async(req, res) => {
    try {
        const id = req.query.auditId;
        const comments = await Comment.findAll({where: {
            audit_id: id
        },
        order: [
            ['createdAt', 'ASC'],
        ],
        include: User
        });
        return res.status(200).send(comments)
    } catch(err) {
        res.send(err);
    }
}