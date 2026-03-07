// 02-NumberType Create a JavaScript function that determines if a number is positive, negative, or zero and returns a
//corresponding string indicating the type.
function numberType(num)
{
    if(num>0)
    {
        console.log("Positive")
        return "Positive"
    }
    else if(num<0)
    {
        console.log("Negative")
          return "Negative"
    }
    else
    {
        console.log("Zero")
          return "Zero"
    }
}


console.log(numberType(-20))
