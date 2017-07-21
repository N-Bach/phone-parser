const phoneRegex = /((012\d)|(09\d)|(016[^01])|0186|0188|0199|086|088|089)([\.|\s]*\d){7}/g;

const s = "extract 'My phone number is 012437873935 0963787..  .39..35'";

var trimPhone = phoneNumber => {
  return phoneNumber.replace(/[\.|\s]*/g, '');
};

var result = [];

s.replace(phoneRegex, phone => {
  result.push(trimPhone(phone));
});

console.log(result);
