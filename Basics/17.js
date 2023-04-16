//Write a JavaScript program to compute the 
//absolute difference between a specified number and 19.
// Returns triple their absolute difference 
//if the specified number is greater than 19
function absoluteDifference(number){
    if (number >= 19){
        return 3 * (number - 19)
    }
    else{
        return 19 - number
    }
}

console.log(absoluteDifference(22))