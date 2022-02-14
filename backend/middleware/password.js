const passwordSchema = require('../models/Password_Validator');

module.exports = (req, res, next) => {
    if (!passwordSchema.validate(req.body.password)) {
        res.status(400).json({ message: 'Votre mot de passe doit : faire entre 8 et 100 caractères, contenir une majuscule, une minuscule, un chiffre et ne doit pas avoir d espace' });
    } else {
        next();
    }
};