const router = require("express").Router();

const authService = require("../services/authService");

router.post("/login", async (req, res) => {
    const userData = req.body;
    //todo: validate data

    try {
        const userInfo = await authService.login(userData);

        const responseData = {
            ...userInfo._doc,
            accessToken: userInfo.accessToken,
        };

        res.send(JSON.stringify(responseData)); 
    } catch (error) {
        console.log(error.message)
        res.status(403).end(JSON.stringify(error.message));
    }
});

router.post("/register", async (req, res) => {
    const userData = req.body;
    //todo: validate data

    try {
        const userInfo = await authService.register(userData);

        const responseData = {
            ...userInfo._doc,
            accessToken: userInfo.accessToken,
        };
        
        res.send(JSON.stringify(responseData));
    } catch (error) {
        // console.log(error);
        
        res.status(403).end(JSON.stringify(error.message));
    }
});

module.exports = router;