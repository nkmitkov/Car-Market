const router = require("express").Router();

router.get("/women", (req, res) => {
    res.render("home/women");
});

router.get("/men", (req, res) => {
    res.render("home/men");
});

module.exports = router;