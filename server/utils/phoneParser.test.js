const { phoneParser } = require('./phoneParser');
var expect = require('chai').expect;

describe('phoneParser', () => {
  it('should parse phone number', () => {
    let phone = '0961234567';
    let s = 'My phone number is ' + phone;
    let result = phoneParser(s);

    expect(result).to.have.lengthOf(1);
  });

  it('should not parse dupliate number', () => {
    let phone = '0961234567';
    let s = `My phone number is ${phone} ${phone} ${phone}`;
    let result = phoneParser(s);

    expect(result).to.have.lengthOf(1);
  });

  it('should parse weird number', () => {
    let phone = '0961234567';
    let s = `My phone number is 012437873935 0963787..  .39..35`;
    let result = phoneParser(s);
    console.log(result);

    expect(result).to.have.lengthOf(1);
  });
});
