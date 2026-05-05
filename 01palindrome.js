function palindrome(searchString){
    let string1=searchString.toLowerCase();
    let reverse=""
    for(let i=string1.length-1;i>=0;i--)
    {
        reverse=reverse + string1[i]

    }
  
      if (reverse===string1)
    { console.log(`${string1} is a Plaindrom`)}
    else
    {
      console.log(`${string1} is not  a Plaindrom`)  
    }

}

palindrome("Madam")
palindrome("Monika")