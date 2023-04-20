// Write a JavaScript program to check whether a given number exists in the range 40..10000.
function test_digit(x, y, n) {
  if (n < 40 || n > 10000) return false;
  else if (n >= x && n <= y) return true;
  else return false;
}
