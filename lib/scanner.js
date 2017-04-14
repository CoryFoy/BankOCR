var Token = require('./token');

function Scanner(stringToScan) {
  this.stringToScan = stringToScan;
  this.tokens = [];
}

Scanner.prototype.scan = function() {
  //TODO: Support different type of line breaks
  var lines = this.stringToScan.split("\n");
  if(lines.length == 4) {
    var numberOfTokensToCreate = (lines[0].split("").length / 3);
    if(numberOfTokensToCreate >= 1) {
      var currentCharOffset = 0;
      for(var tokensCreated = 0; tokensCreated < numberOfTokensToCreate; tokensCreated++) {
        //Tokens come in sets of 9 characters across 3 lines
        var token = new Token();
        for(var currentLine = 0; currentLine < 3; currentLine++) {
          for(var currentChar = currentCharOffset; currentChar < 3+currentCharOffset; currentChar++) {
            token.positions.push(lines[currentLine][currentChar]);
          }
        }
        this.tokens.push(token);
        currentCharOffset += 3;
      }
    }
  }
}

module.exports = Scanner;
