//  Program to append an object into array
let array = []
let obj = {
    name:'Manish',
    phone: 8930513345
}
function appendObjectToArray(arr,obj){
    arr.push(obj)
    console.log(arr)
}

appendObjectToArray(array,obj)