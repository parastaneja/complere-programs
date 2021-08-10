// Program to check the number is palindrome or not.

function checkPalindrome(num){
    let anotherNum = num
    let remainder
    let result = 0
    while(num > 0){
        remainder = parseInt(num % 10)
        result = parseInt((result *10) + remainder)
        num = parseInt(num/10)
    }
    return anotherNum  == result ? `${anotherNum} is Palindrome` : `${anotherNum} is not Palindrome`
}

console.log(checkPalindrome(1234))