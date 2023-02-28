// Grabs sequelize from connection.js, and grabs the User, Post Comment models from models folder
const sequelize = require("../config/connection");
const { User, Character, Post } = require("../models");

// makes an object to locate the seeds in js
const userData = require("./user-seeds.json");
const characterData = require("./character-seeds.json");
const postData = require("./post-seeds.json");

//const postData = [{ name: "why is handlebars so great", description: "HandleBars.js is such a great tool to allow us to insert text using expressions, to make a smoother flowing website.", user_id: 1 }]
// const commentData = require('./comment-seeds.js');

// console.log("After require", userData, characterData)

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  await Character.bulkCreate(characterData, {
    individualHooks: true,
    returning: true,
  });
  await Post.bulkCreate(postData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
