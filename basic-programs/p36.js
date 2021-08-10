// Program to sort array of objects by property values

let obj = {
    a : 30,
    b : 20,
    c : 10,
    d : 50,
    e : 70,
    f : 60
}

let sorted = Object.keys(obj).sort((a,b) => {return obj[a] - obj[b]})
console.log(sorted)


