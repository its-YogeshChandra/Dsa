const arr = [5, 42, 93, 22, 67, 14, 88, 3, 55, 71]

const quickSort = () => {
  // pick up the pivot and high 
  let pivot = arr[0]
  let high = arr.length - 1;

  sort(pivot, high);
  return arr
}

const sort = (pivot) => {
  //create sorting algorithm
  let elLow = 0
  let elhigh = arr.length - 1

  while (elLow <= elhigh) {

    //swaqp the element 
    if (arr[elLow] >= pivot) {
      [arr[elLow], arr[elhigh]] = [arr[elhigh], arr[elLow]]
    }

    // swap the element
    if (arr[elhigh] <= pivot) {
      [arr[elLow], arr[elhigh]] = [arr[elhigh], arr[elLow]]
    }

    elLow++
    elhigh--
  }
}


console.log(quickSort())
