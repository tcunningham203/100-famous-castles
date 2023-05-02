const router = require("express").Router();
const withAuth = require("../../utils/auth");

router.get("/", withAuth, async (req, res) => {
    try {
        res.render("stamps");
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;