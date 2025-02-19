// Write a JavaScript function removeWords  that takes a string as input and returns the remaining string after removing the first three characters.

//       1) If the input is null, undefined, or the empty string, it returns "Invalid input".
//       2) If the string length is three or less, it returns "String too short to remove".
//       3) Do not use any built-in string methods such as .slice() or .substring().

// Input: "Dev Zero One"
// Output: " Zero One"


function removeWords(words) {
  if (words === null || words === undefined || words === "") {
    return "Invalid Input";
  }
  if (words.length <= 3) {
    return "String too short to remove";
  }

  let result = "";
  for (let i = 3; i < words.length; i++) {
    result += words[i];
  }
  return result;
}

console.log(removeWords("Dev Zero One"));
