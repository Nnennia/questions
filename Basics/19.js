//Write a JavaScript program to check whether a given integer is within 20 of 100 or 400.
function check(){
    return ((Math.abs(100 - x) <= 20) || (Math.abs(400 - x) <= 20));
}