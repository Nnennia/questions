//Write a JavaScript program to create a new string without the first and last characters of a given string.
function newString(str) {
  return str.slice(1, -1);
}

console.log(newString("Hello World"));
