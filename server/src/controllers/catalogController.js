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

router.get("/women/:productId", async (req, res) => {
    const productId = req.params.productId;

    try {
        const product = await catalogService.getById(productId).lean();

        res.render("home/details", { ...product });
    } catch (error) {
        console.log(error);
    }
});

router.get("/men", async (req, res) => {
    try {
        const products = await catalogService.getAllMens().lean();

        res.render("home/men", { products });
    } catch (error) {
        console.log(error);
    }
});

router.get("/men/:productId", async (req, res) => {
    const productId = req.params.productId;
    
    try {
        const product = await catalogService.getById(productId).lean();

        res.render("home/details", { ...product });
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;