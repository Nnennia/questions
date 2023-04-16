//Write a program to check whether a specified character exists within the 2nd to 4th position in a given string.
function check(str, char) {
  ctr = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) == char && i >= 1 && i <= 3) {
      ctr = 1;
      break;
    }
  }
  if (ctr == 1) return true;
  return false;
}
