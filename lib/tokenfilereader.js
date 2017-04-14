//THIS FILE AINT GOT NO TESTS BECAUSE ITS HACKED TOGETHER
fs = require('fs');
EntryParser = require('./entryparser');

function TokenFileReader(fileToRead) {
  this.fileToRead = fileToRead;
  this.linesPerToken = 4;
}

TokenFileReader.prototype.readAndParse = function() {
  var reader = this;
  var entryParser = new EntryParser();
  fs.readFile(this.fileToRead, 'utf8', function(err, data) {
    if(err) throw err;
    //TODO: Support different types of line breaks
    var lines = data.split("\n");

    var nextParsableStringTargets = [];

    for(var currentLine = 1; currentLine <= lines.length; currentLine++) {
      nextParsableStringTargets.push(lines[currentLine-1]);
      if(currentLine % reader.linesPerToken == 0) {
        var result = entryParser.parseEntry(nextParsableStringTargets.join("\n"));
        console.log(result);
        nextParsableStringTargets = [];
      }

    }

  });
}

module.exports = TokenFileReader;
