const router = require('express').Router();
const { Character, Post, User } = require('../models/');

router.get('/', async (req, res) => {
    try {
      const postData = await Post.findAll({
       include: [
        {
          model: User,
          attributes: ['battleTag']
        },
       ],
      });
  
      const post = postData.map((post) => post.get({ plain: true }));
      console.log(post);
      res.render('homepage', { 
        post, loggedIn: req.session.loggedIn
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get('/post/:id', async (req, res) => {
    try {
      const postData = await Post.findOne({
        where: { id: req.params.id},
        include: [
          {model: User, attributes: ['battleTag']}
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