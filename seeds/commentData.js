const { Comment } = require('../models');

const commentData = [
    {
        "body": "Test Data Comment"
    }
];
const seedComment = () => Comment.bulkCreate(commentData);
module.exports = seedComment;