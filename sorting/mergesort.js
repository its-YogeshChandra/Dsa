
const arr = [34, 14, 27, 17, 30, 27, 20, 26, 21, 14];

const mergeSort = (arr, low, high) => {
  if (low === high) {
    return [arr[low]]; // return single element array
  }

  const mid = Math.floor((low + high) / 2);

  const left = mergeSort(arr, low, mid);
  const right = mergeSort(arr, mid + 1, high);

  return merge(left, right);
};

const merge = (left, right) => {
  const result = [];

  let i = 0, j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  // Append leftovers
  while (i < left.length) {
    result.push(left[i]);
    i++;
  }

  while (j < right.length) {
    result.push(right[j]);
    j++;
  }

  return result;
};

console.log(mergeSort(arr, 0, arr.length - 1));
