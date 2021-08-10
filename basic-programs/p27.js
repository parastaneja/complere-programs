// Program to check whether a string contains a substring

function checkSubstring(str,checkString){
    for(let i = 0; i < str.length; i++){
        if(str[i] === checkString){
            result = `${checkString} present in ${str}`
        } 
    }
    return result
}

console.log(checkSubstring("manish",'m'))