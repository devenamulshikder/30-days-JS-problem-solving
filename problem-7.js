//  Write a JavaScript function multiplicationTable that takes a number as input and prints its multiplication table up to 10.

// Requirements:
// The function should accept a number as input.

// Example: Input:  5:

function multiplicationTable(num) {
  if (typeof num !== "number") {
    return "Invalid Input";
  }
  let result = "";
  for (let i = 1; i <= 10; i++) {
    let sum = num + " X " + i + " = " + num * i;
    result = result + sum + "\n";
  }
  return result;
}
let equal = multiplicationTable(50);
console.log(equal);
