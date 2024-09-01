const express = require("express");
const mongoose = require("mongoose");

const configExpress = require("./config/configExpress");

const app = express();
const port = 3000;

configExpress(app);