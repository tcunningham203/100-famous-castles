const router = require('express').Router();
const userRoutes = require('./userRoutes');
const castleRoutes = require('./castleRoutes');
const commentRoutes = require('./commentRoutes');

router.use('/users', userRoutes);
router.use('/castles', castleRoutes);
router.use('/comments', commentRoutes);

module.exports = router;
