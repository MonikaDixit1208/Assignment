
let test='testleaf'
let len=test.length
let reverseTest=""
console.log(len)
for(let i=len-1;i>=0;i--)
{
  reverseTest=reverseTest.concat(test[i])
  
}

if(test===reverseTest)
{
    console.log("Palindrome")
}
else
{
    console.log("Not plaindrome")
}