
let count=0
function anagrams(str1,str2){
    if(str1.length==str2.length)
        {
            for(let i=0;i<str1.length;i++)
            {  for(let j=0;j<=str2.length-1;j++)
            {
                if(str1.charAt(i)===str2.charAt(j))
                   { count=count+1
                   }
                else
                    continue
            }
            }
            if(count==str1.length)
            {
                console.log('Anagrams')
            }
            else
            {
                console.log('Not anagrams')
            }
        }
        else 
            console.log('Not anagrams')
    
}
anagrams('earth','monika')
