const router = require("express").Router();
const { User, Character } = require("../../models");
const withAuth = require("../../utils/auth");
// const withAuth = require("../../utils/auth");

router.get("/", async (req, res) => {
  try {
    const userData = await User.findOne({
      where: { id: req.session.userId }
    })
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
})

// post request to sign up a new user
router.post("/signup", async (req, res) => {
  try {
    console.log(req.body);
    const newUser = await User.create({ email: req.body.email, password: req.body.password, battleTag: req.body.battleTag });
    console.log(newUser);
    req.session.save(() => {
      req.session.userId = newUser.id;
      req.session.email = newUser.email;
      req.session.loggedIn = true;
      res.status(200).json({ message: "new user created successfully" });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// post request to log in a user
router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({
      where: { email: req.body.email },
    });
    if (!userData) {
      res.status(404).json({ message: "invalid email" });
      return;
    }
    const passwordData = await userData.checkPassword(req.body.password);
    if (!passwordData) {
      res.status(404).json({ message: "invalid password" });
      return;
    }
    req.session.save(() => {
      (req.session.userId = userData.id),
        (req.session.email = userData.email),
        (req.session.loggedIn = true);
      res.status(200).json({ message: "logged in" });
    });
  } catch {
    res.status(500).json({ message: 'user not created' })
  }
});

// post request to log out a user -- Add withAuth
router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
})



module.exports = router