//Write a JavaScript program to check whether a string "Script" presents at 5th (index 4) position in a given string,
// if "Script" presents in the string return the string without "Script" otherwise return the original one
function check_script(str) {
  if (str.length < 6) {
    return str;
  }
  let result_str = str;

  if (str.substring(10, 4) == "Script") {
    result_str = str.substring(0, 4) + str.substring(10, str.length);
  }
  return result_str;
}
