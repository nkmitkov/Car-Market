const router = require("express").Router();

const homeController = require("./controllers/homeController");
const catalogController = require("./controllers/catalogController");
const authController = require("./controllers/authController");

router.use(homeController);
router.use("/catalog", catalogController);
router.use("/auth", authController);

router.all("*", (req, res) => {
    res.json({err: "Something's wrong"});
});

module.exports = router;