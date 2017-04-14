var Token = require('./token');

function Scanner(stringToScan) {
  this.stringToScan = stringToScan;
  this.tokens = [];
}

Scanner.prototype.scan = function() {
  var lines = this.stringToScan.split("\n");
  if(lines[0].split("").length == 3) {
    this.tokens.push(new Token());
  }
}

module.exports = Scanner;
