//Write a JavaScript program to check two given non-negative integers if one (not both) is a multiple of 7 or 11.
function valCheck(num1, num2) {
  if (
    !((num1 % 7 == 0 || num1 % 11 == 0) && (num2 % 7 == 0 || num2 % 11 == 0))
  ) {
    return num1 % 7 == 0 || num1 % 11 == 0 || num2 % 7 == 0 || num2 % 11 == 0;
  } else return false;
}
