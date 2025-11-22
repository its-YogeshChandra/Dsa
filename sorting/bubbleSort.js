let ar = [5, 2, 8, 1, 3];

const bubblesort = (array) => {
  //fix the array
  let i = 0
  while (i < array.length - 1) {

    //second loop to sort the elements 
    for (let j = 0; j < ((array.length - 1) - i); j++) {
      let k = j + 1
      if (array[j] > array[k]) {
        const temp = array[j]
        array[j] = array[k]
        array[k] = temp
      }
    }
    i++

  }
  return array
}

console.log(bubblesort(ar))
