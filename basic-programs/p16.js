//  program to replace a character in a string

// function replaceCharInString(str, char,replacedChar) {
//     let result = str.replace(char,replacedChar)
//     return result
// }

// console.log(replaceCharInString('Manish', 's', 'm'))



// --------------------Another Method---------------------------

function replaceChar(str,char,val){
    let copyStr = str.split("")
    for(let i = 0; i <= copyStr.length; i++){
        if(copyStr[i] === char){
            copyStr[i] = val
        }
    }
    return copyStr.join("")
}

console.log(replaceChar("Manish",'s','M'))

