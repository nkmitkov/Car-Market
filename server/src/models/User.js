const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        match: [/^[a-zA-Z]+$/, "Name must be only letters"],
        minLength: [2, "Name must be at least 2 characters"],
    },
    email: {
        type: String,
        required: [true, "Email is not valid"],
        match: [/^\w+@\w+\.\w+$/m, "Email is not valid"],
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minLength: [6, "Password must be at least 6 characters"],
    },
}, { timestamps: true });

const User = mongoose.model("User", userSchema);

module.exports = User;