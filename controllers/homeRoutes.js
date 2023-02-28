const router = require('express').Router();
const { Character, Post, User } = require('../models/');

router.get('/', async (req, res) => {
    try {
      // //const postData = await Post.findAll({
      //  // include: [
      //    // User
      //  // ],
      // //});
  // //
      // //const posts = postData.map((post) => post.get({ plain: true }));
  
      res.render('homepage', { 
        //posts, 
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get('/post/:id', async (req, res) => {
    try {
      const postData = await Post.findByPk(req.params.id, {
        include: [
          User,
          {
            model: Comment,
            include: [User],
          },
        ],
      });
  
      if (postData) {
        const post = postData.get({ plain: true });
  
      res.render('singlepost', {
        post,
      });
      } else {
        res.status(404).end()
      }
  
    } catch (err) {
      res.status(500).json(err);
    }
  });



router.get('/login', (req, res) => {
    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }
    res.render('login');
  });
  
  router.get('/signup', (req, res) => {
    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }
  
    res.render('signup');
  });
  

module.exports = router;