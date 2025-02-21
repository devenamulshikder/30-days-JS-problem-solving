function reverseArray(arr) {
  if (!Array.isArray(arr)) {
    return "Invalid";
  }
  let newArray = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newArray.push(arr[i]);
  }
  return newArray;
}

console.log(reverseArray([3, 6, 5, 4, 8]));
