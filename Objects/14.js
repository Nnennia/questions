//Write a JavaScript function to retrieve all the values of an object's properties.
function valueofObject(obj) {
  let values = [];
  values = Object.values(obj);
  return values;
}
console.log(valueofObject({ a: 1, b: 2, c: 3 }));
