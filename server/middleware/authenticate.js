var { User } = require('../models/user');

var authenticate = async (req, res, next) => {
  try {
    var authHeader = req.header('Authorization');
    var token = authHeader.substring(7);
    var user = await User.findByToken(token);
    if (!user) {
      res.status(404).send();
    }
    req.token = token;
    next();
  } catch (e) {
    res.status(401).send(e);
  }
};

module.exports = {
  authenticate
};
