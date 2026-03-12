//Use an anonymous function with `setTimeout` to log `"This message is delayed by 2 seconds"`
after 2 seconds.
  let anonyname= async function  (){
 await new Promise(resolve => setTimeout(resolve, 2000)); // Wait for 2 seconds
    console.log("This message is delayed by 2 seconds")
}

anonyname()
