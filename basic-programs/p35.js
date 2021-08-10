// Program to merge two arrays and remove duplicate items

function addTwoArrayAndRemoveDuplicate(arr,arr1){
    let newArr = [...arr,...arr1]
    for(let i = 0; i < newArr.length; i++){
        for(let j = i+1; j < arr.length; j++){
            if(newArr[i] === newArr[j]){
                newArr.splice(j,1)
                j--
            }
        }
    }
    return newArr
}

let array = [1,1,2,3,3,3,4,5,5,5]
let array1 = [6,6,6,7,7,8,8,9]
console.log(addTwoArrayAndRemoveDuplicate(array,array1))