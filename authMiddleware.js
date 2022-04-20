const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    const token = req.headers["authorization"];

    if (!token) {
        return res.send("token not exist");
    }

    jwt.verify(token, 'jwtPrivateKey', (err, user) => {
        if (err) {
            return res.send("Invalid token");
        }
        req.user = user;
        console.log(user)
        next();
    })

}