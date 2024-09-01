const router = require("express").Router();

router.get("/", (req, res) => {
    res.render("home/home");
});

router.get("/catalog/women", (req, res) => {
    res.render("home/women");
});

router.get("/catalog/men", (req, res) => {
    res.render("home/men");
});

router.get("/contacts", (req, res) => {
    res.render("home/contacts");
});

module.exports = router;