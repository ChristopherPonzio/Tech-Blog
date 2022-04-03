const router = require("express").Router();
const { Comment } = require("../../models/");
const withAuth = require("../../utils/auth");

router.get('/', async (req, res) => {
    try {
        const commentData = await Comment.findAll ({
        });
        res.status(200).json(commentData);
    }
    catch (err) {
        res.status(500).json(err);
    }
});

router.post("/", withAuth, (req, res) => {
    Comment.create({ ...req.body, userId: req.session.userId })
        .then(newComment => {
            res.json(newComment);
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

module.exports = router;