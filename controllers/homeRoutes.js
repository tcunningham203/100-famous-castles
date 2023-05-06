const router = require("express").Router();
const { User, Castle, Stamp } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", withAuth, async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ["password"] },
      order: [["name", "ASC"]],
    });

    const users = userData.map((project) => project.get({ plain: true }));

    const castleData = await Castle.findAll({});

    const castles = castleData.map((castle) => castle.get({ plain: true }));
    // console.log(castles);

    const stampData = await Stamp.findAll({});

    const stamps = stampData.map((stamp) => stamp.get({ plain: true }));

    res.render("map", {
      users,
      castles,
      stamps,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

router.get("/stampbook", withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
    });

    const user = userData.get({ plain: true });

    res.render("stamps", {
      ...user,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});



router.get("/castle/:id", withAuth, async (req, res) => {
  try {

    const castleData = await Castle.findByPk(req.params.id);

    const castle = castleData.get({ plain: true });
    console.log(castle);

    res.render("castle", {
      ...castle,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
