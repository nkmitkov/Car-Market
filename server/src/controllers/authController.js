const router = require("express").Router();

const authService = require("../services/authService");

router.post("/login", async (req, res) => {
    const userData = req.body;

    // validate data
    try {
        const userInfo = await authService.login(userData);

        res.send(JSON.stringify(userInfo)); 
    } catch (error) {
        res.status(402).end(error.message);
    }
});

router.post("/register", async (req, res) => {
    const userData = req.body;

    // validate data
    try {
        const userInfo = await authService.register(userData);

        res.send(JSON.stringify(userInfo));
    } catch (error) {
        res.status(403).end(error.message);
    }
});

module.exports = router;