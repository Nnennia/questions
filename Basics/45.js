//Write a JavaScript program to check two given integer values and
//return true if one of the number is 15 or if their sum or difference is 15.

function is15(num1, num2) {
  if (
    num1 + num2 === 15 ||
    Math.abs(num1 - num2 === 15) ||
    num1 === 15 ||
    num2 === 15
  ) {
    return true;
  } else {
    return false;
  }
}
