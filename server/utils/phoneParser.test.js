const { phoneParser } = require('./phoneParser');
var expect = require('chai').expect;

describe('phoneParser', () => {
  it('should parse phone number', () => {
    let phone = '0961234567';
    let s = 'My phone number is ' + phone;
    let result = phoneParser(s);

    expect(result).to.have.lengthOf(1);
  });

  it('should parse multiple phone numbers', () => {
    let phone1 = '0961234567';
    let phone2 = '01281234567';
    let s = `My phone number is ${phone1} ${phone2} ${phone1}`;
    let result = phoneParser(s);
    console.log(result);
    expect(result).to.have.lengthOf(2);
  });

  it('should not parse dupliate number', () => {
    let phone = '0961234567';
    let s = `My phone number is ${phone} ${phone} ${phone}`;
    let result = phoneParser(s);

    expect(result).to.have.lengthOf(1);
  });

  it('should not parse number longer than expected', () => {
    let s = `My phone number is 012437873935 0963787..  .39..35`;
    let result = phoneParser(s);
    expect(result).to.have.lengthOf(0);
  });

  it('should not parse number shorter than expected', () => {
    let s = `My phone number is 012473935 09637..  .39..35`;
    let result = phoneParser(s);
    expect(result).to.have.lengthOf(0);
  });

  it('should not parse number with space and dot in between', () => {
    let s = `My phone number is 012437873935 0963787..  .39..35`;
    let result = phoneParser(s);
    expect(result).to.have.lengthOf(0);
  });

  it('should not parse phone number contain alphabetic character', () => {
    let s = `My phone number is 012437tt873s93 0963787..  .3d9..3`;
    let result = phoneParser(s);
    expect(result).to.have.lengthOf(0);
  });

  it('should not parse phone number with wrong prefix', () => {
    let s = `My phone number is 0331234567 0963787..  .3d9..3`;
    let result = phoneParser(s);
    expect(result).to.have.lengthOf(0);
  });
});
