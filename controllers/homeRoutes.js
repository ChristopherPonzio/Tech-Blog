const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const withAuth = require('../utils/auth');

// get all posts for homepage
router.get("/", (req, res) => {
  Post.findAll({
      include: [User],
  })
      .then((dbPostData) => {
          const posts = dbPostData.map((post) => post.get({ plain: true }));

          res.render("all-posts", { posts });
      })
      .catch((err) => {
          res.status(500).json(err);
      });
});
    

// get single post
router.get("/post/:id", (req, res) => {
  Post.findByPk(req.params.id, {
      include: [
          User,
          {
              model: Comment,
              include: [User],
          },
      ],
  })
      .then((dbPostData) => {
          if (dbPostData) {
              const post = dbPostData.get({ plain: true });

              res.render("single-post", { post });
          } else {
              res.status(404).end();
          }
      })
      .catch((err) => {
          res.status(500).json(err);
      });
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

module.exports = router;
