var assert = require('assert');
var EntryParser = require('../../lib/entryparser');
var Account = require('../../lib/account');

module.exports = {
  parserReturnsResultsForParsedTokenGroup: function() {
    var testFileGroupEntry = "    _  _     _  _  _  _  _ \n  | _| _||_||_ |_   ||_||_|\n  ||_  _|  | _||_|  ||_| _|\n";
    var entryParser = new EntryParser();
    var expectedAccount = new Account("123456789");
    assert.deepEqual(expectedAccount, entryParser.parseEntry(testFileGroupEntry));
  }

}
