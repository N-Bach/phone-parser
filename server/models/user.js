var mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

var UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    trim: true
  },
  token: {
    type: String
  }
});

UserSchema.methods.generateToken = function() {
  var user = this;
  var token = jwt
    .sign(
      {
        _id: this._id,
        access: 'auth'
      },
      'abc123'
    )
    .toString();

  user.token = token;
  return user.save().then(() => {
    return token;
  });
};

UserSchema.statics.findByToken = function(token) {
  var User = this;
  var decoded;
  try {
    decoded = jwt.verify(token, 'abc123');
  } catch (e) {
    return Promise.reject();
  }
  return User.findOne({
    _id: decoded._id,
    token
  });
};

var User = mongoose.model('User', UserSchema);

module.exports = { User };
