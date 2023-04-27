//Write a JavaScript program to compare two objects to determine
//if the first contains equivalent property values to the second one

const matches = (obj, source) =>
  Object.keys(source).every(
    (key) => obj.hasOwnProperty(key) && obj[key] === source[key]
  );

console.log(matches({ a: 1 }, { a: 1 })); // true
