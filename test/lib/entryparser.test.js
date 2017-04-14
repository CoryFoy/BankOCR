var assert = require('assert');
var EntryParser = require('../../lib/entryparser');

module.exports = {
  parserReturnsResultsForParsedTokenGroup: function() {
    var testFileGroupEntry = "    _  _     _  _  _  _  _ \n  | _| _||_||_ |_   ||_||_|\n  ||_  _|  | _||_|  ||_| _|\n";
    var entryParser = new EntryParser();
    assert.equal("123456789", entryParser.parseEntry(testFileGroupEntry));
  }

}
