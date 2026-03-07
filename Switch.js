function browserType(name)
{   
    if(name==="chrome")
    {
        console.log("Browser is Chrome")
        
    }
    else if(name==="firefox")
    {
        console.log("Browser is Firefox")
         
    }
    else
    {
        console.log("Other Browser")
          
    }
}
browserType("Firefox".toLowerCase())

function runType(name)
{
switch(name)  {
case "sanity" : 
    { console.log("Sanity")
       break }
      case "smoke":{
          console.log("Smoke")
          break }
         case "regression":{
        console.log("Regression")
        break }
        default:
            console.log("No runType")
    
          }
        }

          runType("abc ".toLowerCase())


