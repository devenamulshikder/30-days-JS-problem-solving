// Write a function that takes an array and returns a new array containing all the odd indexed elements from this array.
// If the new  array length is less than 3. Then add a new element “DEVZEROONE” at the last position of this new array.
// If the new  array length is greater than 3. Then add a new element “DEVZEROONE” at the first position of this new array.
// In this problem. We will consider 0 indexed  as an odd number.

// Example 1:
// Input: [ 3, 6, 5, 4, 8, 10 ]
// Output: [ “DEVZEROONE”, 3, 6, 4, 10 ]

// Example 2:
// Input: [ 0, 2, 4, 7, 9 ]
// Output: [ 0, 2, 7 ]

// Example 3:
// Input: [1, 2, 3]
// Output:[1, 2, "DEVZEROONE"]

// Constraints:
// Array length cannot be negative or zero.

function oddArrays(arr) {
    if (!Array.isArray(arr)) {
      return "Invalid";
    }

  let newArray = [];
  for (let i = 0; i < arr.length; i++)
    if (i % 2 != 0 || i == 0) newArray.push(arr[i]);
  if (newArray.length < 3) {
    newArray.push("DEVZEROONE");
  }
  if (newArray.length > 3) {
    newArray.unshift("DEVZEROONE");
  }
  return newArray;
}

console.log(oddArrays([1, 2, 3])); //0, 1, 3, 5
