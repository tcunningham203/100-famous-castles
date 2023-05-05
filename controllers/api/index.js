const router = require("express").Router();
const userRoutes = require("./userRoutes");
const castleRoutes = require("./castleRoutes");

router.use("/users", userRoutes);
router.use("/castles", castleRoutes);

module.exports = router;
