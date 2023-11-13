const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
    try {
        let {fullName, email, password} = req.body;
        if (!fullName || !email || !password) {
            return res.send({msg: "All fields are required"});
        } 
            let found = await User.findOne({email, password});
            if (found) {
                return res.send({msg: "Please register or log in with a new email."});
            }
                let hashedPassword = await bcrypt.hash(password, 10);
                await User.create({fullName, email, password: hashedPassword});
                return res.send({msg: "Registered successfully."});
    } catch (err) {
        res.status(500).send({msg: "Internal server error. Registration failed"})
    }
};


const login = async (req, res) => {
    try {

    } catch (err) {
        res.status(500).send({msg: "Internal server error. Log in failed"})
    }
};

module.exports = {register, login};