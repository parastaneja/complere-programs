//  Program to reverse a string

function reverseString(str){
    let reverse = ""
    for(let i = 1; i <= str.length; i++){
        reverse += str[str.length-i]
    }
    console.log(reverse)
}

reverseString("manish")



// --------------------Another Method---------------------------

// let str = "Manish"
// let copyStr = str.split("")
// let res = ""
// for(let i = 1; i <= copyStr.length; i++){
//     res += copyStr[copyStr.length-i]
// }
// console.log(res)