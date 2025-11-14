//print something n times  
const N = 6;
let ctr = 0
const print = (N) => {
  //method to do the recursion 
  if (ctr > N) {
    return
  }
  // main function 
  console.log(" hello world ")
  ctr++
  print(N)
}

print(N);
