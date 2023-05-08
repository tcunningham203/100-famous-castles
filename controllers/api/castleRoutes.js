const router = require("express").Router();
const { Castle } = require("../../models");

router.get("/:id", async (req, res) => {
  try {
    const castleData = await Castle.findByPk(req.params.id);

    // Retrieve the current user ID
    const currentUserId = req.user.id;

    res.render("castle", { castleData, currentUserId });
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
