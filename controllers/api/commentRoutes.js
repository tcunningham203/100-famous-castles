const router = require("express").Router();
const { Comments } = require("../../models");
const withAuth = require('../../utils/auth');


router.get('/', (req, res) => {
  Comments.findAll({})
    .then(dbCommentData => res.json(dbCommentData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', withAuth, (req, res) => {
  if (req.session) {
    Comments.create({
      comment_text: req.body.comment_text,
      castle_id: req.body.castle_id,
      user_id: req.session.user_id,
    })
      .then(dbCommentData => res.json(dbCommentData))
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  }
});

module.exports = router;

