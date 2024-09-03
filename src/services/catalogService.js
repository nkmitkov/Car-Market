const Product = require("../models/Product");

exports.getAllMens = () => Product.find({ sex: "men" });
exports.getAllWomens = () => Product.find({ sex: "women" });
exports.getById = (productId) => Product.findById(productId);