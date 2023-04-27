//Write a JavaScript program to create an updated string of 4 copies of the last 3 characters of a given original string. The string length must be 3 and above
function newString(str) {
  return str.slice(str.length - 3, str.length).repeat(4);
}
console.log(newString("python"));
