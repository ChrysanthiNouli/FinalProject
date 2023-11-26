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
    cart: [{product:{type: mongoose.Schema.Types.ObjectId, ref:"Product"}}]
});

const User = mongoose.model("User", userSchema);

module.exports = User;