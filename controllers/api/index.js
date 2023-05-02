const router = require('express').Router();
const userRoutes = require('./userRoutes');
const castleRoutes = require('./castleRoutes');
const commentRoutes = require('./commentRoutes');
const stampbookRoutes = require('./stampbookRoutes');

router.use('/users', userRoutes);
router.use('/castles', castleRoutes);
router.use('/comments', commentRoutes);
router.use('/stampbook', stampbookRoutes);

module.exports = router;
