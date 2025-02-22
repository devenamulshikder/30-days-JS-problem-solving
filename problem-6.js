/**
 * Write a JavaScript function filterIntegers  that takes an array that contains string and integer elements, and returns a new array with only integer elements.

    Example 1:
    Input: [ 3, 6, “hello”, 4, “3”,  8]
    Output: [ 3, 6,  4,  8]

    Constraints:
    Array length cannot be zero or negative.

 */

function filterIntegers(arr) {
    if(!Array.isArray(arr)){
        return "Invalid Input"
    }
    if(arr.length <=0){
        return 'Array length cannot be zero or negative'
    }
    let newArray = []
    for(let array of arr){
        if(typeof array === 'number'){
            newArray.push(array)
        }
    }
    return newArray;
}

console.log(filterIntegers([3, 6, "hello", 4, "3", 8]));
