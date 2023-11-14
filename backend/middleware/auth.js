const jwt = require("jsonwebtoken");
require("dotenv").config();

let verifyToken = (req, res, next) => {
    try {

    } catch (err) {
        res.status(500).send({msg: "Internal server error."})
    }
};

module.exports = verifyToken;