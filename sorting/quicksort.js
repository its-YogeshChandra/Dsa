const arr = [5, 42, 93, 22, 67, 14, 88, 3, 55, 71]
let pivVal = 0
const quickSort = () => {
  // pick up the pivot and high 
  if (pivVal > arr.length - 1) { return arr }
  let pivot = arr[pivVal]
  pivVal++
  sort(pivot);
  return quickSort()
}

const sort = (pivot) => {
  //create sorting algorithm
  let i = -1
  let j = arr.length

  while (true) {

    do {
      i++
    } while (
      arr[i] < pivot
    );

    do {
      j--
    } while (
      arr[j] > pivot
    );

    //breaking condition 
    if (i >= j) {
      return
    }

    //swap if upper two do while condition don't work 
    [arr[i], arr[j]] =
      [arr[j], arr[i]]
  }

}


console.log(quickSort())
