// Write a javascript function patternPrint that takes an integer and make a pattern for this number.

// Example 1:
// Input: 5
// Output:
// 5
// 55
// 555
// 5555
// 55555
// 5555
// 555
// 55
// 5

function patternPrint(num) {
  let result = "";
  for (let i = 1; i <= num; i++) {
    result += `${String(num).repeat(i)}\n`;
  }

  for (let i = num - 1; i >= 1; i--) {
    result += `${String(num).repeat(i)}\n`;
  }

  return result;
}

console.log(patternPrint(5))
