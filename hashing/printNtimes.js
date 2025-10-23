//Problem : Print something N number of times using recursion 

const N = 10
ctr = 0

const PrintNTimes = (ctr, N)=>{
//base condition 
if(ctr > N ) return

//make the function to print 
console.log("the value of counter is :" + ctr)

//update the counter value 
ctr++

//call the function again 
PrintNTimes(ctr, N)
}

PrintNTimes(ctr,N)