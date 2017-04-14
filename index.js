//THIS FILE AINT GOT NO TESTS BECAUSE ITS HACKED TOGETHER
var TokenFileReader = require('./lib/tokenfilereader')

var filename = process.argv[2];
var fileReader = new TokenFileReader(filename);
fileReader.readAndParse();
