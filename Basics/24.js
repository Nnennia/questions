// Write a JavaScript program to create a new string from a given string with the first character of the given string added at the front and back.
function first_last(str1) {
  if (str1.length <= 1) {
    return str1;
  }
  mid_char = str1.substring(1, str1.length - 1);
  return str1.charAt(str1.length - 1) + mid_char + str1.charAt(0);
}
