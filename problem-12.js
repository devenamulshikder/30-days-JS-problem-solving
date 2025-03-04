// check isPrime 

function isPrime(n) {
  if (typeof n !== "number") {
    return "Invalid Input";
  }
  let divisor = 2;
  while (n > divisor) {
    if (n % divisor == 0) {
      return false;
    } else divisor++;
  }
  return true;
}

console.log(isPrime(137));
console.log(isPrime(237));
console.log(isPrime(337));
