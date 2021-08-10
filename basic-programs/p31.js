// Program to check whether a object is an array
let objNew = [{name:"manish"}]
function checkArray(obj){
    return Array.isArray(obj)
}

console.log(checkArray(objNew))