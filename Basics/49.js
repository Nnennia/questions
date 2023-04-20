//Write a JavaScript program to replace every character in a given string with the character following it in the alphabet.
function replaceString(str) {
  return str.replace(/[a-z]/gi, function (c) {
    return String.fromCharCode(c.charCodeAt(0) + 1);
  });
}

console.log(replaceString("Hello World"));
