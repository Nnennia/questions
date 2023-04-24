//Write a JavaScript function to retrieve all the names of object's own and inherited properties.

function allKeys(obj) {
  if (!isObject(obj)) return [];
  let keys = [];
  for (var key in obj) keys.push(key);
  return keys;
}
function isObject(obj) {
  let type = typeof obj;
  return type === "function" || (type === "object" && !!obj);
}
function Student(name) {
  this.name = name;
}
Student.prototype.rollno = true;
console.log(allKeys(new Student("Sara")));
