const router = require("express").Router();
const userRoutes = require("./userRoutes");
const castleRoutes = require("./castleRoutes");
const stampRoutes = require("./stampbookRoutes");
const reviewRoutes = require('./review-routes');
const noteRoutes = require('./noteRoutes');
// const dashboardRoutes = require('./dashboard-routes');

router.use("/users", userRoutes);
router.use("/castles", castleRoutes);
router.use("/stamps", stampRoutes);
router.use("/review", reviewRoutes);
router.use('/notes', noteRoutes);
// router.use('/dashboard', dashboardRoutes);

module.exports = router;