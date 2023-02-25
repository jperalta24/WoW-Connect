const router = require('express').Router();

const userRoutes = require("./userRoutes");
const characterRoutes = require("./characterRoutes");

router.use("/user", userRoutes);
router.use("/character", characterRoutes);

module.exports = router;