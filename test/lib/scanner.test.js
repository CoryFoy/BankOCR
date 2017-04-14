var assert = require('assert');
var Scanner = require('../../lib/scanner');

module.exports = {
  scanningAnEmptyStringProducesZeroTokens: function() {
    var emptyString = "";
    var scanner = new Scanner(emptyString);
    scanner.scan();
    assert.equal(0, scanner.tokens.length);
  },

  scanningAMultiLineEmptyStringProducesZeroTokens: function() {
    var emptyString = "\n\n\n";
    var scanner = new Scanner(emptyString);
    scanner.scan();
    assert.equal(0, scanner.tokens.length);
  },

  scanningAStringProducesATokenForThreeCharacters: function() {
    var singleToken = "   \n   \n   \n   ";
    var scanner = new Scanner(singleToken);
    scanner.scan();
    assert.equal(1, scanner.tokens.length);
  },

  scanningAStringPutsTheCharactersForATokenInTheToken: function() {
    var singleToken = "123\n456\n789\n   ";
    var scanner = new Scanner(singleToken);
    scanner.scan();
    var token = scanner.tokens[0];
    assert.equal(9, token.positions.length);
  },

  scanningAStringPutsTheCharactersForATokenInTheRightPosition: function() {
    var singleToken = "123\n456\n789\n   ";
    var scanner = new Scanner(singleToken);
    scanner.scan();
    var token = scanner.tokens[0];
    expectedTokenPositions = ["1","2","3","4","5","6","7","8","9"];
    assert.deepEqual(expectedTokenPositions, token.positions);
  }
}
