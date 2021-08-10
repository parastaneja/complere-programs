// Program to check whether a string starts and ends with a certain characters


function checkChar(str,char){
    let copyStr = str.split("")
        if(str[0] === char && str[str.length-1] === char){
            console.log(`${str} start and ends with ${char}`)
        }else{
            console.log(`${str} does not start and ends with ${char}`)
        }
}

checkChar("anisha",'a')