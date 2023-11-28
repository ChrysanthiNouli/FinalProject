const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
      },
    cart: [{product:{type: mongoose.Schema.Types.ObjectId, ref:"Product"}, title: {type: mongoose.Schema.Types.String, ref:"Product.title"}}]
});

const User = mongoose.model("User", userSchema);

module.exports = User;