//Write a JavaScript program to compute the sum of the two given integers,
//If the sum is in the range 50..80 return 65 other wise return 80.

function sum(a, b) {
  if (a < 50 || a > 80) {
    return 65;
  } else if (b < 50 || b > 80) {
    return 80;
  } else {
    return a + b;
  }
}
