var assert = require('assert')
var Account = require('../../lib/account');

module.exports = {
  accountIsValidWithValidChecksum: function() {
    var account = new Account("345882865");
    assert.equal(true, account.isValid());
  },
  accountIsInvalidWhenInvalidChecksum: function() {
    var account = new Account("664371495");
    assert.equal(false, account.isValid());
  },
  accountIsInvalidWhenUnparsableCharacters: function() {
    var account = new Account("66?371495");
    assert.equal(false, account.isValid());
  },
  accountIsErrorWhenUnparsableCharacters: function() {
    var account = new Account("66?371495");
    assert.equal(true, account.isError());
  },
  accountIsNotErrorWhenNoUnparsableCharacters: function() {
    var account = new Account("669371495");
    assert.equal(false, account.isError());
  }
}
