//Write a JavaScript program to create one string of specified copies (positive numbers) of a given string.
function stringCopies(string, number) {
  if (number <= 0) {
    return false;
  } else {
    return string.repeat(number);
  }
}
console.log(stringCopies("Wait", 7));
