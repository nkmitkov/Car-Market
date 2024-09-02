const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        match: [/^[a-zA-Z0-9\s]+$/, "Title must be only letters, digits and whitespaces"],
        minLength: [5, "Title must be at least 5 characters"],
    },
    description: {
        type: String,
        required: [true, "Description is required"],
        minLength: [20, "Description must be at least 20 characters"],
        maxLength: 1000,
    },
    sex: {
        type: String,
        required: [true, "Sex is required"],
        match: [/^male|female$/mg, "Sex must be only 'male' or 'female'"],
    },
    imageUrl: {
        type: String,
        required: [true, "Image is required"],
        match: /^https?:\/\//,
    },
    owner: {
        type: mongoose.Types.ObjectId,
        ref: "User",
    }
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;