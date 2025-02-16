// Write a JavaScript Function  printNumber  that takes an integer N and prints all the numbers between 0 to N.

// Example:
// Input: 5
// Output: 0 1 2 3 4 5

// Constraints: 0 < N

function printNumber(n) {
  if (n < 0 && n !== "number") {
    return "Provide Integer Value!";
  }
  for (let i = 0; i <= n; i++) {
    console.log(i);
  }
}
printNumber(5);
