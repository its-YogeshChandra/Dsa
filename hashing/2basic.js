// Definition of Hashing:
// In order to optimize this approach, we need to use hashing. If we say the definition of hashing in a naive way, it is nothing but the combination of the steps, pre-storing, and fetching.
//
// Now, let’s understand how to solve the given problem using the two steps:
// Assumption: We are assuming that the maximum element in the given array can be 12.

const array = [1, 2, 3, 4, 5, 5, 7, 7, 7, 8, 8, 9];
const n = 8
output = 3

const hashmap = new Map()

//feed the values to hash array
for (let i = 0; i < array.length; i++) {
  //update the value add the index
  const key = array[i]
  if (hashmap.has(key)) {
    const hashkey = hashmap.get(key);
    hashmap.set(key, hashkey + 1)
  }
  else {
    hashmap.set(
      key, 1
    )
  }
}
console.log(hashmap)

const findrepitition = (n) => {
  //find the value in index 
  return ` the value repetition : ${hashmap.get(n)}`

}

console.log(findrepitition(n));





































