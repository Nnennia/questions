// Write a JavaScript program to create new string with first 3 characters are in lower case from a given string.
//If the string length is less than 3 convert all the characters in upper case.
function newString(word) {
  if (word.length >= 3) {
    newWord = word.substring(0, 3).toLowerCase();
    return newWord + word.slice(3);
  } else if (word.length < 3) {
    return word.toUpperCase();
  }
}
console.log(newString("Ola"));
