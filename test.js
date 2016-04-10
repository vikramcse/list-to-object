var expect = require('chai').expect;
var toObj = require('./index.js');

describe('tests for creating object from list', function() {
  it('should get object if single list of [key value] paris passed', function() {
    var query = [['America', 'Washington'], ['India', 'Mumbai'], ['Canada', 'Ottawa']];
    expect(toObj(query)).to.be.eql({ America: 'Washington', India: 'Mumbai', Canada: 'Ottawa' });
  });

  it('should get object if separate lists of key and values are passed', function() {
    var list = ['America', 'India', 'Canada'];
    var values = ['Washington', 'Mumbai', 'Ottawa'];

    expect(toObj(list, values)).to.be.eql({ America: 'Washington', India: 'Mumbai', Canada: 'Ottawa' });
  });
});
