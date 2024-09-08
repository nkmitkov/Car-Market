const express = require("express");
const mongoose = require("mongoose");

const configExpress = require("./config/configExpress");
const configHandlebars = require("./config/configHandlebars");
const routes = require("./routes");

const app = express();
const port = 3000;

configExpress(app);
configHandlebars(app);

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    next();
})

app.use(routes);

const dbName = "neat-fashion";
mongoose.connect(`mongodb://127.0.0.1:27017/${dbName}`);

try {
    mongoose.connection.on("connected", () => console.log("DB is connected"));
    mongoose.connection.on("disconnect", () => console.log("DB is disconnected"));
    mongoose.connection.on("error", (error) => console.log(`DB error -> ${error}`));
} catch (error) {
    console.log(error);
}

app.listen(port, () => console.log(`App is listening on http://127.0.0.1:${port}`));