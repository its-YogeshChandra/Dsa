// Problem Statement: Given an integer N. Print the Fibonacci series up to the Nth term.
//
// Examples:
//
// Example 1:
// Input: N = 5
// Output: 0 1 1 2 3 5
// Explanation: 0 1 1 2 3 5 is the fibonacci series up to 5th term.(0 based indexing)
//
// Example 2:
// Input: 6
//
// Output: 0 1 1 2 3 5 8
// Explanation: 0 1 1 2 3 5 8 is the fibonacci series upto 6th term.(o based indexing)

const N = 5
let ctr = 0
let a = 0
let b = 1
let sequence = `${a}${b}`

const fibonacciNumber = (N, ctr, a, b) => {
  //make fibonacci number 
  if (ctr >= N) {
    return sequence
  }

  //add the value

  let temp = a + b
  sequence = sequence + temp
  a = b
  b = temp
  ctr++

  return fibonacciNumber(N, ctr, a, b)
}
console.log(fibonacciNumber(N, ctr, a, b));
