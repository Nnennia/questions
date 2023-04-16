// Write a JavaScript program to compute the sum of the two given integers.
// If the two values are same, then returns triple their sum.

function sumNumbers(a, b){
    if (a === b){
        return 3 *(a +b)
    }
    else {
        return a + b
    }
}