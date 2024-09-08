const router = require("express").Router();

const catalogService = require("../services/catalogService");

router.get("/", async (req, res) => {
    //todo: I have to get latest 3 men and women products
    const allMenProducts = await catalogService.getAllMens();

    res.json(allMenProducts);
});

module.exports = router;