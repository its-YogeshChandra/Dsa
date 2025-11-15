// Problem Statement: "Given a string, check if the string is palindrome or not."  A string is said to be palindrome if the reverse of the string is the same as the string.
//
// Examples:
//
// Example 1:
// Input: Str =  “ABCDCBA”
// Output: Palindrome
// Explanation: String when reversed is the same as string.
//
// Example 2:
// Input: Str = “TAKE U FORWARD”
// Output: Not Palindrome
// Explanation: String when reversed is not the same as string.

const Input = "TAKE U FORWARD";

let ctr = 0

const checkPalindrome = (input) => {

  if (ctr >= (input.length - 1) / 2) {
    return "is a palindrome"
  }

  const secondCounter = (input.length - 1) - ctr
  if (input[ctr] != input[secondCounter]) {
    return "not a palindrome"
  }
  ctr++
  return checkPalindrome(input)
}

console.log(checkPalindrome(Input));
