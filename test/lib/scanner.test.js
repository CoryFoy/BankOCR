var assert = require('assert');
var Scanner = require('../../lib/scanner');

module.exports = {
  scanningAnEmptyStringProducesZeroTokens: function() {
    var emptyString = "";
    var scanner = new Scanner(emptyString);
    assert.equal(0, scanner.tokens.length);
  },

  scanningAMultiLineEmptyStringProducesZeroTokens: function() {
    var emptyString = "\n\n\n\n";
    var scanner = new Scanner(emptyString);
    assert.equal(0, scanner.tokens.length);
  },

  scanningAStringProducesATokenForThreeCharacters: function() {
    var singleToken = "   \n   \n   \n   \n";
    var scanner = new Scanner(singleToken);
    scanner.scan();
    assert.equal(1, scanner.tokens.length);
  }
}
