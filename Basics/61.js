//Write a JavaScript program to concatenate two strings except for their first character.
function concatenate(str1, str2) {
  return str1.slice(1) + str2.slice(1);
}
console.log(concatenate("php", "js"));
