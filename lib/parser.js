function Parser() {
  this.isMatch = function(comparer, tokenPositions) {
    return (comparer.length==tokenPositions.length
      && comparer.every(function(v,i) { return v === tokenPositions[i]}));
  }
}

function BadNumberParser(parser, token) {
  //designed to match anything thrown at it
  //Used as a placeholder when nothing else matches in the chain
  this.isMatch = true;
  this.value = "";
}

function ZeroParser(parser, token) {
  this.comparer = [" ", "_", " ", "|", " ", "|", "|", "_", "|"];
  this.isMatch = parser.isMatch(this.comparer, token.positions);
  this.value = 0;
}

function OneParser(parser, token) {
  this.comparer = [" ", " ", "|", " ", " ", "|", " ", " ", "|"];
  this.isMatch = parser.isMatch(this.comparer, token.positions);
  this.value = 1;
}

function TwoParser(parser, token) {
  this.comparer = [" ", "_", " ", " ", "_", "|", "|", "_", " "];
  this.isMatch = parser.isMatch(this.comparer, token.positions);
  this.value = 2;
}

function ThreeParser(parser, token) {
  this.comparer = [" ", "_", " ", " ", "_", "|", " ", "_", "|"];
  this.isMatch = parser.isMatch(this.comparer, token.positions);
  this.value = 3;
}

function FourParser(parser, token) {
  this.comparer = [" ", " ", " ", "|", "_", "|", " ", " ", "|"];
  this.isMatch = parser.isMatch(this.comparer, token.positions);
  this.value = 4;
}

function FiveParser(parser, token) {
  this.comparer = [" ", "_", " ", "|", "_", " ", " ", "_", "|"];
  this.isMatch = parser.isMatch(this.comparer, token.positions);
  this.value = 5;
}

function SixParser(parser, token) {
  this.comparer = [" ", "_", " ", "|", "_", " ", "|", "_", "|"];
  this.isMatch = parser.isMatch(this.comparer, token.positions);
  this.value = 6;
}

function SevenParser(parser, token) {
  this.comparer = [" ", "_", " ", " ", " ", "|", " ", " ", "|"];
  this.isMatch = parser.isMatch(this.comparer, token.positions);
  this.value = 7;
}

function EightParser(parser, token) {
  this.comparer = [" ", "_", " ", "|", "_", "|", "|", "_", "|"];
  this.isMatch = parser.isMatch(this.comparer, token.positions);
  this.value = 8;
}

function NineParser(parser, token) {
  this.comparer = [" ", "_", " ", "|", "_", "|", " ", "_", "|"];
  this.isMatch = parser.isMatch(this.comparer, token.positions);
  this.value = 9;
}

Parser.prototype.parseNumber = function(token) {
  var parserList = [ZeroParser,OneParser,TwoParser,ThreeParser,
  FourParser,FiveParser,SixParser,SevenParser,EightParser,NineParser,
  BadNumberParser];
  for(let parser of parserList) {
    var p = new parser(this, token);
    if(p.isMatch) {
      return p.value;
    }
  }
}

module.exports = Parser;
