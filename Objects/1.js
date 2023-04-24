//Write a JavaScript program to list the properties of a JavaScript object.
function keys(obj) {
  let keys = [];
  for (var key in obj) {
    keys.push(key);
  }
  return keys;
}
console.log(keys({ a: 1, b: 2, c: 3 }));
console.log(
  keys(
    {
      obj1: "edwin",
    },
    {
      obj2: "stella",
    }
  )
);
