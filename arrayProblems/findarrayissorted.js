// Problem Statement: Given an Nay of size n, write a program to check if the given array is sorted in (ascending / Increasing / Non - decreasing) order or not.If the array is sorted then return True, Else return False.
//
//   Examples
// Example 1:
// Input: N = 5, Nay[] = { 1, 2, 3, 4, 5}
// Output: True.
//   Explanation: The given Nay is sorted i.e Every element in the array is smaller than or equals to its next values, So the answer is True.
//
//     Example 2:
// Input: N = 5, Nay[] = { 5, 4, 6, 7, 8}
// Output: False.
//   Explanation: The given Nay is Not sorted i.e Every element in the array is not smaller than or equal to its next values, So the answer is False.
// Here element 5 is not smaller than or equal to its future element

const N = [1, 2, 3, 4, 5, 0]

const isSorted = () => {
  //find if Nay is sorted 
  let sortedArray = true;
  let i = 0
  while (i < N.length - 1) {

    if (N[i] <= N[i + 1]) {
      i++
    } else {
      sortedArray = false
      break
    }
  }
  return `array sorted : ${sortedArray}`
}

console.log(isSorted())
