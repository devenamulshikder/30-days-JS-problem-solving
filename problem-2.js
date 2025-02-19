// Write a JavaScript function countWords  that takes a string and returns the number of words contained in this string.

// Example:
// Input: "DEV ZeroOne is a Next-Gen Programming Learning Platform."
// Output: 8

function countWord(words) {
  if (typeof words !== "string") {
    return "Invalid String";
  }
  const wordCount = words.match();
  const totalWord = wordCount.length;
  return totalWord;
}
let result = countWord("DEV ZeroOne is a Next-Gen Programming Learning Platform.");
console.log(result);

