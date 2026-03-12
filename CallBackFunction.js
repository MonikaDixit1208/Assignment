*Task 4: Callback Function
Create a function named `getUserData` that takes a callback function as a parameter. Inside
`getUserData`, simulate fetching data with `setTimeout` and then call the callback function with
that should print “Call Back Function” after 3 seconds.
Call the `getUserData` function and log message using the callback function. 

//Without Parameter  
  let setTimeOu= async function  (){
 await new Promise(resolve => setTimeout(resolve, 3000)); // Wait for 2 seconds
    console.log(`This message is delayed by 3 seconds`)
}
// With Parameter


function getUserData(setTimeParam){
    setTimeParam()
}

getUserData(setTimeOu)

let setTimeOu= async function  (a:number){
 await new Promise(resolve => setTimeout(resolve, a)); // Wait for 2 seconds
    console.log(`This message is delayed by 3 seconds`)
}



function getUserData(setTimeParam,a:number){
    setTimeParam(a)
}

getUserData(setTimeOu,3000)
