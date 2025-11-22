const arr = [34, 14, 27, 17, 30, 27, 20, 26, 21, 14]

const insertionSort = () => {
  //element 
  let i = 1
  while (i <= arr.length - 1) {

    for (let j = 0; j < i; j++) {
      let k = j + 1;
      if (arr[j] >= arr[k]) {
        let temp = arr[j]
        arr[j] = arr[k]
        arr[k] = temp
      }

    }
    i++
  }
  return arr
}

console.log(insertionSort())
