Scanner = require('./scanner');
Token = require('./token');
Parser = require('./parser');

function EntryParser() {
}

EntryParser.prototype.parseEntry = function(entry) {
  var result = [];
  var scanner = new Scanner(entry);
  var parser = new Parser();
  scanner.scan();
  var tokens = scanner.tokens;
  for(let token of tokens) {
    result.push(parser.parseNumber(token));
  }
  return result.join("");
}

module.exports = EntryParser;
