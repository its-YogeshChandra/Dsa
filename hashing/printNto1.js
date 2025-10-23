// Problem Description: Given an integer N, write a program to print numbers from N to 1.

// Examples
// Input: N = 4
// Output: 4, 3, 2, 1
// Explanation: All the numbers from 4 to 1 are printed.

// Input: N = 1
// Output: 1 
// Explanation: This is the base case.

const N = 5

const PrintNto1 = (N)=>{
//base condition 
if(N < 1)return 

//print the values
console.log(N)
 
PrintNto1(N-1)
}

PrintNto1(N)