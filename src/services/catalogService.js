const Product = require("../models/Product");

exports.getAllMens = () => Product.find({sex: "male"});
exports.getAllWomens = () => Product.find({sex: "female"});