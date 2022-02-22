const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    req.auth = jwt.verify(token, '051d76f6b05cf4168ffb34bd9ff655ec');
    next();
  } catch {
    res.status(401).json({
      error: new Error('Invalid request!')
    });
  }
};