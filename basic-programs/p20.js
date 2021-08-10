// Program to count the number of vowels in a string

function countVowels(str){
    let counter = 0;
    for(let i = 0; i <= str.length; i++){
        if(str[i] === 'a' || str[i] ===  'e' || str[i] ===   'i' 
        || str[i] ===   'o' || str[i] ===   'u'){
            counter++
        }
    }
    return counter
}

console.log(countVowels("Manish"))
