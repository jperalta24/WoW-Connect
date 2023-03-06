const router = require('express').Router();
const { User, Post, Character } = require('../models/');
const withAuth = require('../utils/auth');
// -- Add withAuth
router.get('/', async (req, res) => {
  try {
    // Fetch all posts for the logged-in user
    const postData = await Post.findAll({
      where: { user_id: req.session.userId },
      include: [{ model: User, attributes: ["battleTag"] }],
    });

    const characterData = await Character.findAll({
      where: { user_id: req.session.userId },
      include: [{ model: User, attributes: ["battleTag"] }]
    })

    const userData = await User.findAll({
      where: { id: req.session.userId}
    })

    // Serialize the data
    const posts = postData.map((post) => post.get({ plain: true }));
    const characters = characterData.map((character) => character.get({ plain: true }));
    const user= userData.map((user) => user.get({ plain: true }));
    // Render the dashboard template with the serialized data and session status
    res.render("dashboard", { posts, characters, user, loggedIn: req.session.loggedIn });
  } catch (err) {
    res.redirect('login')
  }
});

router.get('/new', withAuth, (req, res) => {
  res.render('newpost', {
    layout: 'dashboard',
  })
})

router.get('/edit/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id);

    if (postData) {
      const post = postData.get({ plain: true });

      res.render('editpost', {
        layout: 'dashboard',
        post,
      });
    } else {
      res.status(404).end()
    }

  } catch (err) {
    res.redirect('login')
  }
});


module.exports = router