function fibonacci(num) {
  // type your code here
  // 0, 1, 1, 2, 3, 5, 8
  let fibArr = [0, 1]

  let max = 0
  for(let i=2; i <= num; i++){
    fibArr[i] = fibArr[i-2] += fibArr[i-1]
    max<fibArr[i]? max = fibArr[i]:null
  }
  return max
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// And a written explanation of your solution
