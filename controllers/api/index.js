const router = require('express').Router();

const userRoutes = require("./userRoutes");
const characterRoutes = require("./characterRoutes");
const postRoutes = require("./postRoutes");

router.use("/user", userRoutes);
router.use("/character", characterRoutes);
router.use("/post", postRoutes);


module.exports = router;