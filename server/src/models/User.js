const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

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
        lowercase: true,
        match: [/^\w+@\w+\.\w+$/m, "Email is not valid"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minLength: [6, "Password must be at least 6 characters"],
    },
}, { timestamps: true });

userSchema.pre("save", async function() {
    const hash = await bcrypt.hash(this.password, 12);
    this.password = hash;
});

userSchema.virtual("rePassword")
    .set(function(value) {
        if (value !== this.password) {
            throw new Error("Passwords missmatch");
        };
    });

const User = mongoose.model("User", userSchema);

module.exports = User;