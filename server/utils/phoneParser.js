const _ = require('lodash');

const phoneRegex = /\b((012\d)|(09\d)|(016[^01])|0186|0188|0199|086|088|089)([\.|\s]*\d){7}\b/g;
const space = /[\.|\s]*/g;

var phoneParser = s => {
  let response = [];
  s.replace(phoneRegex, phoneNumber => {
    let trimResult = phoneNumber.replace(space, '');
    response.push(trimResult);
  });
  return _.uniq(response);
};

module.exports = { phoneParser };
