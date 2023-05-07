const router = require('express').Router();
const { User, Review } = require('../../models');
const withAuth = require('../../utils/auth');

// GET api/reviews
router.get('/', async (req, res) => {

    try {
        // GET all reivews
        const dbReviewData = await Review.findAll({
            include: [
                {
                    model: User,
                    attributes: ['email']
                }
            ]
        })

        res.json(dbReviewData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})

// GET /api/reivews/:id
router.get('/:id', async (req, res) => {
    try { 
        // GET one post
        const dbReviewData = await Review.findOne({
            where: {
                id: req.params.id
            },
            include: [
                {
                    model: User,
                    attributes: ['email']
                }
            ]
        });

        if (!dbReviewData) {
            res.status(404).json({ message: 'No review found with this id' });
            return;
        }
        res.json(dbReviewData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})

// CREATE /api/reivews
router.post('/', withAuth, async (req, res) => {

    try {
        // CREATE a review
        const dbReviewData = await Review.create({
            user_name: req.body.user_name,
            review_text: req.body.review_text,
            star_rating: req.body.star_rating,
            user_id: req.session.user_id
        })
        console.log(dbReviewData);
        res.json(dbReviewData);

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})




module.exports = router;