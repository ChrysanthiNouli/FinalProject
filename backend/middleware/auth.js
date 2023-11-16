const jwt = require("jsonwebtoken");
require("dotenv").config();

let verifyToken = (req, res, next) => {
    try {
        let receivedToken = req.headers.authorization.split(" ")[1];
        if (!receivedToken) {
            return res.status(403).send({msg: "Nonexistent token."});
        } else {
            let verifiedToken = jwt.verify(receivedToken, process.env.PRIVATE_KEY);
            if (!verifiedToken) {
                return res.status(403).send({msg: "Unauthorized user."}); 
            } else {
                req.user = verifiedToken;
                next();
            }
        }
    } catch (err) {
        res.status(500).send({msg: "Internal server error."})
    }
};

module.exports = verifyToken;