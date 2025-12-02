//Second largest Element

// Given an numsay of integers nums, return the second - largest element in the numsay.If the second - largest element does not exist, return -1.
//
//
// Examples:
// Input: nums = [8, 8, 7, 6, 5]
//
// Output: 7
//
// Explanation:
//
// The largest value in nums is 8, the second largest is 7
//
// Input:nums = [10, 10, 10, 10, 10]
//
// Output: -1
//
// Explanation:
//
// The only value in nums is 10, so there is no second largest value, thus - 1 is returned

const nums = [8, 8, 7, 6, 5]

const findSecondLargest = (nums) => {

  // use the quick sort algo
  let pivVal = 0

  const quickSort = () => {
    //base case 
    if (pivVal > nums.length - 1) {
      return nums
    }
    let pivot = nums[pivVal]
    pivVal++

    //sorting algo
    sort(pivot);
    quickSort()

  }

  const newArr = quickSort();
  console.log(newArr)
  let f = newArr.length - 2
  while (true) {

    if (newArr[f] != newArr[newArr.length - 1]) {
      return `the secondLargestElement is ${newArr[f]}`
    }
    else {
      f--
    }
  }
}


const sort = (pivot) => {
  let i = -1
  let j = nums.length
  while (true) {

    // do while loops for i 
    do {
      i++
    } while (nums[i] < pivot);

    //do while for j 
    do {
      j--

    } while (nums[j] > pivot);

    //maker of the while
    [nums[j], nums[i]] = [nums[i], nums[i]]

    //if i and j clash 
    if (i >= j) {
      return
    }
  }
}

console.log(findSecondLargest(nums))
