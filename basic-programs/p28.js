//  Program to replace all instances of a character in a string

function replaceAllInstances(str,check,value){
    let newStr = str.split("")
    for(let i in newStr){
        if(newStr[i] === check){
            newStr[i] = value
        }
    }
    return newStr.join("")
}

console.log(replaceAllInstances("manish","m","s"))