const router = require("express").Router();
const userRoutes = require("./userRoutes");
const castleRoutes = require("./castleRoutes");
const stampRoutes = require("./stampbookRoutes");

router.use("/users", userRoutes);
router.use("/castles", castleRoutes);
router.use("/stamps", stampRoutes);

module.exports = router;
