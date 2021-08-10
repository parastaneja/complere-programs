//  Program to merge property of two objects

const obj1 = {
    First_name:"Manish",
    phone : 8930513345,
    email:"mk1044872@gmail.com"
}

const obj2 = {
    Last_name:"Kumar",
    phoneNumber : 9466690252,
    emailId:"mn1044872@gmail.com"
}

function mergeTwoObjects(o,o1){
    let newObj = {...o, ...o1}
    return newObj
}

console.log(mergeTwoObjects(obj1,obj2))