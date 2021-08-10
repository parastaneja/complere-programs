// Program to loop through an object

const obj = {
    id : 1,
    name : 'Manish kumar',
    Profession : 'Software Engineer',
    Address  : '#225 Vill Harda',
    Phone : 8930513345,
    email : 'mk1044872@gmail.com'
}


function loopOverObject(objct){
    for(let i in objct){
        return Object.keys(objct)
    }
}
console.log(loopOverObject(obj))