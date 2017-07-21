var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(
  'mongodb://adminnguyenbach:Garfield123@ds157559.mlab.com:57559/scotch-testing',
  {
    useMongoClient: true
  }
);

module.exports = { mongoose };
