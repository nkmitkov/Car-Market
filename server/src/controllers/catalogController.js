const router = require("express").Router();

const catalogService = require("../services/catalogService");

router.get("/women", async (req, res) => {
    try {
        const allWomenProducts = await catalogService.getAllWomens();

        res.json(allWomenProducts);
    } catch (error) {
        console.log(error);
    }
});

router.get("/women/:productId", async (req, res) => {
    const productId = req.params.productId;

    try {
        const product = await catalogService.getById(productId);

        res.json(product);
    } catch (error) {
        console.log(error);
    }
});

router.get("/men", async (req, res) => {
    try {
        const allMenProducts = await catalogService.getAllMens();

        res.json(allMenProducts);
    } catch (error) {
        console.log(error);
    }
});

router.get("/men/:productId", async (req, res) => {
    const productId = req.params.productId;
    
    try {
        const product = await catalogService.getById(productId);

        res.json(product);
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;