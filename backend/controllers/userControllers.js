const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const verifyToken = require("../middleware/auth.js");

const register = async (req, res) => {
    try {
        let { username, email, password } = req.body;
        if (!username || !email || !password) {
            return res.send({msg: "All fields are required"});
        } 
            let found = await User.findOne({ email });
            if (found) {
                return res.send({msg: "Please register or log in with a new email."});
            }
                let hashedPassword = await bcrypt.hash(password, 10);
                await User.create({ username, email, password: hashedPassword });
                return res.send({msg: "Registered successfully."});
    } catch (err) {
        console.log(err);
        res.status(500).send({msg: "Internal server error. Registration failed"});
    }
};

const login = async (req, res) => {
    try {
        let {email, password} = req.body;
        if (!email || !password) {
            return res.status(402).send({msg: "Both email and password are required."});
        } 
        let existingUser = await User.findOne({email});
        if (existingUser) {
            let validPassword = await bcrypt.compare(password, existingUser.password);
            if (!validPassword) {
                return res.status(401).send({msg: "Invalid email or password."});
            } else {
                let token = jwt.sign(
                    { username: existingUser.username, email: existingUser.email, id: existingUser._id }, 
                    process.env.PRIVATE_KEY, 
                    {expiresIn : "2h"}
                );
                res.status(200).send({msg:"Welcome "+ `${existingUser.username}`, token});
            } 
        } else {
            return res.status(404).send({msg: "Invalid email or password. User not found."});
        }
    } catch (err) {
        res.status(500).send({msg: "Internal server error. Log in failed"})
    }
};

module.exports = { register, login };