//sum of first N numbers


//Problem statement: Given a number ‘N’, find out the sum of the first N natural numbers.

//Examples:

//Example 1:
//Input: N=5
//Output: 15
//Explanation: 1+2+3+4+5=15

//Example 2:
//Input: N=6
//Output: 21
//Explanation: 1+2+3+4+5+6=15


const N = 5;
let ctr = 0;
const sumofN = (N) => {
  //sum of first n natural numbers
  if (N < 0) {

    return ctr
  }

  //update the data 
  ctr = ctr + N
  N = N - 1

  //function 
  return sumofN(N)
}

console.log(sumofN(N));
