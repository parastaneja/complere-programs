// Program to convert objects to string
const ob = {
    name:"manish",
    phone:8930513345
}
function convertObjectToString(obj){
    return JSON.stringify(obj)
}

console.log(convertObjectToString(ob))