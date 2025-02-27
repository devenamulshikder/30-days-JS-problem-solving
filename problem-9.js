// Write a javaScript function countDigits  that takes a parameter as an integer and returns  the number of digits in this parameter.

// Example 1:
// Input: 59863
// Output: 5

// Constraints:
// You cannot change the type of value. Like, Cannot convert an integer into string.

function countDigits(num) {
  if (num === 0) {
    return 1;
  }
  num = Math.abs(num);
  let count = 0;

  while (num > 0) {
    num = Math.floor(num / 10);
    count++;
  }
  return count;
}
console.log(countDigits(-59863));
