/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */

var gcd = function(num1, num2) {
  let smaller = Math.min(num2, num2);
  let greatestDivisor = 1;

  for (let i=1; i<= smaller; i++) {
      if (num1 % i == 0 && num2 % i == 0){
          greatestDivisor = i;
      }
  }

  return greatestDivisor;
}
var gcdOfStrings = function(str1, str2) {
  if (str1 + str2 != str2 + str1){
      return "";
  }

  let gcdValue = gcd(str1.length, str2.length);

  return str1.substring(0, gcdValue);
};