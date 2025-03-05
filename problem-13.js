// check duplicate number

function removeDuplicate(arr){
  let exists = {};
  let outArr = [];

  for (let elm of arr) {
    if (!exists[elm]) {
      outArr.push(elm);
      exists[elm] = true;
    }
  }

  return outArr;
};

console.log(removeDuplicate([1, 3, 3, 3, 1, 5, 6, 7, 8, 1]));
