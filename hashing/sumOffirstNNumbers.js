// Problem statement: Given a number ‘N’, find out the sum of the first N natural numbers.

// Examples:

// Example 1:
// Input: N=5
// Output: 15
// Explanation: 1+2+3+4+5=15

// Example 2:
// Input: N=6
// Output: 21
// Explanation: 1+2+3+4+5+6=21

const N = 6
let temp = 0
let sum = 0


const sumofFirstNNumber = (N, temp, sum)=>{
//base condition : if temp becomes equal or greater then N
if(temp > N) return console.log(sum)

sum = sum + ((N+temp) - N)
temp++
sumofFirstNNumber(N, temp, sum)

}
sumofFirstNNumber(N,temp,sum)