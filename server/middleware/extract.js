const _ = require('lodash');

var commandExtract = (req, res, next) => {
  var { command } = req.body;
  if (command.trim().indexOf('extract') !== 0) {
    res.status(400).send('wrong format');
  }
  req.command = command;
  next();
};

module.exports = {
  commandExtract
};
