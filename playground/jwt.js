const jwt = require('jsonwebtoken');

try {
  var token = jwt
    .sign(
      {
        _id: 'dfskj143',
        access: 'auth'
      },
      'abc123'
    )
    .toString();
  console.log('this is the token: ', token);
} catch (e) {
  console.log('cannot sign token');
}

try {
  var decoded = jwt.verify(token, 'abc123');
  console.log('here is the token decoded:', decoded);
} catch (e) {
  console.log1;
}
