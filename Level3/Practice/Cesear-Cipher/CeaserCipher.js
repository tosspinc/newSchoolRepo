var readline = require('readline-sync');
var input = readline.question('What phrase would you like to encrypt? ').toLowerCase();
var shift = parseInt(readline.question('How many letters would you like to shift? '));

function caesarCipher(str, shift) {
  shift = shift % 26;
  var inputArr = str.split('');
  var outputArr = [];
  for (var i = 0; i < inputArr.length; i++) {
    var charCode = inputArr[i].charCodeAt(0);
    if (charCode >= 97 && charCode <= 122) {
      var newCharCode = charCode + shift;
      if (newCharCode > 122) {
        newCharCode = newCharCode - 26;
      }
      var newChar = String.fromCharCode(newCharCode);
      outputArr.push(newChar);
    } else {
      outputArr.push(inputArr[i]);
    }
  }
  var outputStr = outputArr.join('');
  return outputStr;
}

var encrypted = caesarCipher(input, shift);
console.log(encrypted);