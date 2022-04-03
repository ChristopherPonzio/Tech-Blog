const { Post } = require('../models');

const postData = [
    {
        "title": "Test",
        "body": "Test Data"
    }
];
const seedPost = () => Post.bulkCreate(postData);
module.exports = seedPost;