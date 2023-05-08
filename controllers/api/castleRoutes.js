const router = require("express").Router();
const { Castle } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const castleData = await Castle.findAll();
    res.status(200).json(castleData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;