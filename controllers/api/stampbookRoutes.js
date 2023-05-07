const router = require("express").Router();
const { Stamp, Castle } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const stampData = await Stamp.findAll({
      include: [{ model: Castle, attributes: ["stamppic"] }],
    });
    res.status(200).json(stampData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const stampData = await Stamp.create(req.body);
    res.status(200).json(stampData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
