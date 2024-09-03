const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        match: [/^[a-zA-Z0-9\s]+$/, "Title must be only letters, digits and whitespaces"],
        minLength: [3, "Title must be at least 3 characters"],
    },
    description: {
        type: String,
        required: [true, "Description is required"],
        minLength: [10, "Description must be between 10 and 500 characters"],
        maxLength: 500,
    },
    sex: {
        type: String,
        required: [true, "Sex is required"],
        match: [/^men|women$/mg, "Sex must be only 'male' or 'female'"],
    },
    image: {
        type: String,
        required: [true, "Image is required"],
        match: /^https?:\/\//,
    },
}, { timestamps: true });

const Product = mongoose.model("Product", productSchema);

module.exports = Product;