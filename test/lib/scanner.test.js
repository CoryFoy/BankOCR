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
  },

  scanningAStringProducesMultipleTokensForMultipleCharacters: function() {
    var multiToken = "      \n      \n      \n      ";
    var scanner = new Scanner(multiToken);
    scanner.scan();
    assert.equal(2, scanner.tokens.length);
  },

  scanningAStringPutsTheCharactersForMultipleTokensInTheRightPosition: function() {
    var singleToken = "123abc\n456def\n789ghi\n   ";
    var scanner = new Scanner(singleToken);
    scanner.scan();
    var firstToken = scanner.tokens[0];
    var secondToken = scanner.tokens[1];

    expectedFirstTokenPositions = ["1","2","3","4","5","6","7","8","9"];
    expectedSecondTokenPositions = ["a","b","c","d","e","f","g","h","i"];

    assert.deepEqual(expectedFirstTokenPositions, firstToken.positions);
    assert.deepEqual(expectedSecondTokenPositions, secondToken.positions);
  },
}
