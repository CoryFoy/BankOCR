var Token = require('./token');

function Scanner(stringToScan) {
  this.stringToScan = stringToScan;
  this.tokens = [];
}

Scanner.prototype.scan = function() {
  //TODO: Support different type of line breaks
  var lines = this.stringToScan.split("\n");
  //oh this is an awful test right now
  if(lines.length == 4 && lines[0].split("").length >= 3) {
    //Tokens come in sets of 9 characters across 3 lines
    var token = new Token();
    for(var currentLine = 0; currentLine < 3; currentLine++) {
      for(var currentChar = 0; currentChar < 3; currentChar++) {
        token.positions.push(lines[currentLine][currentChar]);
      }
    }
    this.tokens.push(token);
  }
}

module.exports = Scanner;
