//Write a JavaScript program to check whether the characters
// a and b are separated by exactly 3 places anywhere (at least once) in a given string.
function checkAB(string) {
  return /a...b/.test(str) || /b...a/.test(str);
}
