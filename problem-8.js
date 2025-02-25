/**
 * 
 * Write a function findIndex that takes an array of strings and a string as arguments. and return the index number of            this   string.
    If cannot find the string return -1.

    Example 1:
    Input: [ "hello", "blue", "green" ] , "blue"
    Output: 1

    Example 2:
    Input: [ "hello", "blue", "green" ] , "red"
     Output: -1
 * 
 * 
 */

function findIndex(arr, str) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return "Array length cannot be zero or negative.";
  }
  if (typeof str !== "string") {
    return "Provide String";
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === str) {
      return i;
    }
  }

  return -1;
}

console.log(findIndex(["hello", "blue", "green"], "red"));
