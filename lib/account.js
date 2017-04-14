function Account(accountNumber) {
  this.accountNumber = accountNumber;
}

Account.prototype.calculateChecksum = function() {
  var positions = this.accountNumber.split("");
  var totalSum = 0;

  positions.reverse();

  for(var i = 1; i <= positions.length; i++) {
    totalSum += positions[i-1] * i;
  }
  return totalSum;
}

Account.prototype.isValid = function() {
  var checksum = this.calculateChecksum();
  return (checksum%11 == 0);
}

Account.prototype.isError = function() {
  return this.accountNumber.toString().indexOf("?") > -1;
}

module.exports = Account;
