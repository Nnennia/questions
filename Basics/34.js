//Write a JavaScript program to find the larger number from the two given positive integers,
//the two numbers are in the range 40..60 inclusive
function larger(a, b) {
  if (a >= 40 && a >= 60 && b >= 40 && b >= 60) {
    if (a === b) {
      return "Number are equal";
    }
    if (a > b) {
      return a;
    } else {
      return b;
    }
  } else {
    return "Numbers do not match range";
  }
}
console.log(larger(20, 70));
