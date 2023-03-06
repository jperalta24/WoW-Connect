const router = require("express").Router();
const { User, Character, Post } = require("../../models");
const withAuth = require("../../utils/auth");

// get all lfg posts
router.get("/", async (req, res) => {
    try {
      const postData = await Post.findAll({});
      if (postData.length === 0) {
        res.status(404).json({ message: "No posts" });
        return;
      }
      res.status(200).json(postData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

//get post by id
router.get('/:id', async (req, res) => {
    try {
        const postData = await Post.findOne({
            where: { id: req.params.id}
        });
        if (!postData){
            return res.status(400).json({message: 'Cannot find post'});
        } res.render('singlepost', {post: postData.get({ plain: true })});
    } catch (err) {
        res.status(500).json({message: 'Error retrieving post data'});
    }
});


//create a new lfg post -- Add withAuth
router.post("/", withAuth, async (req, res) => {
  try {
    console.log("req.body:", req.body);
console.log("postName:", req.body.postName);

    const postData = await Post.create({
      ...req.body,
      user_id: req.session.userId,
    });
    console.log(postData);
    res.status(200).json(postData);
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const postData = await Post.update(
      {
        name: req.body.name,
        description: req.body.description,
        faction: req.body.faction,
        class: req.body.class,
        role:req.body.role,
        realm: req.body.realm,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    if (!postData) {
      res.status(404).json({ message: "This id is has not post" });
      return;
    } (res.status(200).json({message:"Post updated successfully"}))
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});

//delete a post-- Add withAuth
router.delete("/:id", async (req, res) => {
    try {
      const postData = await Post.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.userId,
        },
      });
      res.status(200).json(postData);
    } catch (err) {
      res.status(500).json(err)
    }
  });

//need a pot route to update post 


module.exports = router