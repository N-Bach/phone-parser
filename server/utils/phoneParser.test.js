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
    let s = `My phone number is 012437873935 0963787..  .39..35`;
    let result = phoneParser(s);
    expect(result).to.have.lengthOf(0);
  });

  it('should parse number with space and dot in between', () => {
    let s = `My phone number is 012437873935 0963787..  .39..35`;
    let result = phoneParser(s);
    expect(result).to.have.lengthOf(0);
  });

  it('should not parse phone number contain alphabetic character', () => {
    let s = `My phone number is 012437tt873s93 0963787..  .3d9..3`;
    let result = phoneParser(s);
    expect(result).to.have.lengthOf(0);
  });
});
