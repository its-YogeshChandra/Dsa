// Problem Statement: Given an array, we have to find the largest element in the array.
//
//   Examples
// Example 1:
// Input: arr[] = { 2, 5, 1, 3, 0}
// Output: 5
// Explanation:
// 5 is the largest element in the array.
//
//   Example 2:
// Input: arr[] = { 8, 10, 5, 7, 9}
// Output: 10
// Explanation:
// 10 is the largest element in the array.

const arr = [2, 5, 1, 3, 0, 10, 19];

// brute force technique ----
const findLargest = (arr) => {
  //take the first element and commpare the difference
  let i = 0;

  while (i <= arr.length - 1) {
    let ishighest
    for (let j = 0; j <= arr.length - 1; j++) {
      const difference = arr[i] - arr[j]

      if (difference < 0) {
        ishighest = false
      }
    }
    if (ishighest == false) {
      i++
    } else {
      return `the largest elemenet is : ${arr[i]}`
    }
  }
}


console.log(findLargest(arr))
