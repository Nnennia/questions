//Write a JavaScript function to print all the methods in an JavaScript object.
function findAllMethods(obj) {
  return Object.getOwnPropertyNames(obj).filter(function (property) {
    return typeof obj[property] == "function";
  });
}
