const express = require('express');
const bodyParser = require('body-parser');
const _ = require('lodash');

var { mongoose } = require('./db/mongoose');
const { commandExtract } = require('./middleware/extract');
const { authenticate } = require('./middleware/authenticate');
const { phoneParser } = require('./utils/phoneParser');
var { User } = require('./models/user');

var app = express();

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('Hello there');
});

app.post('/auth', async (req, res) => {
  try {
    var body = _.pick(req.body, ['username', 'password']);
    var user = new User(body);
    await user.save();
    var token = await user.generateToken();
    res.send({ token });
  } catch (e) {
    res.status(400).send(e.message);
  }
});

app.post('/ez', authenticate, commandExtract, (req, res) => {
  res.send({ response: phoneParser(req.command) });
});

app.listen(PORT, () => {
  console.log('server is listenning at port', PORT);
});

module.exports = {
  app
};
