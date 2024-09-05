const router = require("express").Router();

router.get("/", (req, res) => {
    // res.json();
    res.render("home/home");
});

router.get("/contacts", (req, res) => {
    res.render("home/contacts");
});

module.exports = router;