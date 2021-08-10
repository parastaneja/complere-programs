// Program to check if a key exists in a object
const obj = {
    id : 1,
    name : 'Manish kumar',
    Profession : 'Software Engineer',
    Address  : '#225 Vill Harda',
    Phone : 8930513345,
    email : 'mk1044872@gmail.com'
}

function isKeyPresent(key){
    if(obj[key]){
        return `${key} key exist in the Object`
    }else{
        return false
    }
}

console.log(isKeyPresent('Profession'))
