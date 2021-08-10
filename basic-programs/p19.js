function countChar(str,char){
    let copyStr = str.split("")
    let counter = 0;
    for(let i = 0; i <= copyStr.length; i++){
        if(copyStr[i] === char){
            counter++
        }
    }
    return counter
}

console.log(countChar("Manisssssh",'s'))
