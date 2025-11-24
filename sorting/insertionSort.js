const arr = [34, 14, 27, 17, 30, 27, 20, 26, 21, 14]

const insertionSort = () => {
  //element 
  let i = 0
  while (i <= arr.length - 2) {

    for (let j = i + 1; j > 0; j--) {
      let k = j - 1
      if (arr[j] <= arr[k]) {
        [arr[j], arr[k]] = [arr[k], arr[j]]
      }
    }
    i++
  }

  return arr
}

console.log(insertionSort())
