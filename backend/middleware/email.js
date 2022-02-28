let validator = require("email-validator");

module.exports = (req, res, next) => {
    if (!validator.validate(req.body.email)) {
        res.status(400).json({ message: 'Votre email est incorrecte' });
    } else {
        next();
    }
};