const router = require("express").Router();

const catalogService = require("../services/catalogService");

router.get("/women", async (req, res) => {
    try {
        const products = await catalogService.getAllWomens().lean();

        res.render("home/women", { products });
    } catch (error) {
        console.log(error);
    }
});

router.get("/men", (req, res) => {
    res.render("home/men");
});

module.exports = router;