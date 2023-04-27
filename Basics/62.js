//Write a JavaScript program to move the last three characters to the start of a given string.
// The string length must be greater than or equal to three.

function moveLastThree(str) {
  if (str.length <= 3) {
    return str;
  }
  return (
    str.substring(0, 3) +
    str.substring(str.length - 3, str.length) +
    str.substring(str.length - 3, str.length)
  );
}
