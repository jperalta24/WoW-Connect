const router = require("express").Router();
// const { request } = require("express");
const { User, Character, Post } = require("../../models");
const withAuth = require("../../utils/auth");

//create a new character-- Add withAuth
router.post("/", async (req, res) => {
  try {
    const newCharacter = await Character.create({
      // spread operator is used to create a new object with the same properties as req.body. By doing this,
      // the properties in req.body are copied into the new object, which is then passed to the Post.create method as an argument.
      ...req.body,
      user_id: req.session.userId,
    });
    res.status(200).json(newCharacter);
  } catch (err) {
    res.status(500).json(err);
  }
});

// edit a character-- Add withAuth
router.put("/:id", async (req, res) => {
  try {
    const updatedCharacter = await Character.update(
      {
        characterName: req.body.characterName,
        faction: req.body.faction,
        role: req.body.role,
        race: req.body.race,
        class: req.body.class,
        realm: req.body.realm,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    if (!updatedCharacter) {
      res.status(404).json({ message: "Invalid character ID" });
      return;
    }
    res.status(200).json(updatedCharacter);
  } catch (err) {
    res.status(500).json(err);
  }
});

// delete a character-- Add withAuth
router.delete("/:id", async (req, res) => {
  try {
    const characterData = await Character.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.userId,
      },
    });
    res.status(200).json(characterData);
  } catch (err) {
    res.status(500).json(err)
  }
});

module.exports = router;
