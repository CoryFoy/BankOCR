var assert = require('assert');
var Token = require('../../lib/token');
var Parser = require('../../lib/parser');

module.exports = {
  parsingAnEmptyTokenReturnsEmptyResponse: function() {
    var token = new Token();
    for(var i = 0; i < 9; i++) {
      token.positions.push("");
    }
    var parser = new Parser();
    //Is a decision to return an unparsable number as a string
    //a good one? Probably not.
    assert.equal("?", parser.parseNumber(token));
  },

  parsingAZeroTokenReturnsTheNumberZero: function() {
    var token = new Token();
    token.positions = [" ", "_", " "
                     , "|", " ", "|"
                     , "|", "_", "|"];
    var parser = new Parser();
    assert.strictEqual(0, parser.parseNumber(token));
  },

  parsingAOneTokenReturnsTheNumberOne: function() {
    var token = new Token();
    token.positions = [" ", " ", " "
                     , " ", " ", "|"
                     , " ", " ", "|"];
    var parser = new Parser();
    assert.strictEqual(1, parser.parseNumber(token));
  },

  parsingATwoTokenReturnsTheNumberTwo: function() {
    var token = new Token();
    token.positions = [" ", "_", " "
                     , " ", "_", "|"
                     , "|", "_", " "];
    var parser = new Parser();
    assert.strictEqual(2, parser.parseNumber(token));
  },

  parsingAThreeTokenReturnsTheNumberThree: function() {
    var token = new Token();
    token.positions = [" ", "_", " "
                     , " ", "_", "|"
                     , " ", "_", "|"];
    var parser = new Parser();
    assert.strictEqual(3, parser.parseNumber(token));
  },

  parsingAFourTokenReturnsTheNumberFour: function() {
    var token = new Token();
    token.positions = [" ", " ", " "
                     , "|", "_", "|"
                     , " ", " ", "|"];
    var parser = new Parser();
    assert.strictEqual(4, parser.parseNumber(token));
  },

  parsingAFiveTokenReturnsTheNumberFive: function() {
    var token = new Token();
    token.positions = [" ", "_", " "
                     , "|", "_", " "
                     , " ", "_", "|"];
    var parser = new Parser();
    assert.strictEqual(5, parser.parseNumber(token));
  },

  parsingASixTokenReturnsTheNumberSix: function() {
    var token = new Token();
    token.positions = [" ", "_", " "
                     , "|", "_", " "
                     , "|", "_", "|"];
    var parser = new Parser();
    assert.strictEqual(6, parser.parseNumber(token));
  },

  parsingASevenTokenReturnsTheNumberSeven: function() {
    var token = new Token();
    token.positions = [" ", "_", " "
                     , " ", " ", "|"
                     , " ", " ", "|"];
    var parser = new Parser();
    assert.strictEqual(7, parser.parseNumber(token));
  },

  parsingAEightTokenReturnsTheNumberEight: function() {
    var token = new Token();
    token.positions = [" ", "_", " "
                     , "|", "_", "|"
                     , "|", "_", "|"];
    var parser = new Parser();
    assert.strictEqual(8, parser.parseNumber(token));
  },

  parsingANineTokenReturnsTheNumberNine: function() {
    var token = new Token();
    token.positions = [" ", "_", " "
                     , "|", "_", "|"
                     , " ", "_", "|"];
    var parser = new Parser();
    assert.strictEqual(9, parser.parseNumber(token));
  },
}
