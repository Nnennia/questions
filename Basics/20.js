//Write a JavaScript program to check from two given integers,
// whether one is positive and another one is negative
function check(x, y){
    return ((x < 0 && y > 0) || x > 0 && y < 0) 
}

console.log(check(1, 2))