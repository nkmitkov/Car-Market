const express = require("express");
const mongoose = require("mongoose");

const configExpress = require("./config/configExpress");
const configHandlebars = require("./config/configHandlebars");

const app = express();
const port = 3000;

configExpress(app);
configHandlebars(app);