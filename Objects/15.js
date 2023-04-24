//Write a JavaScript function to convert an object into a list of `[key, value]` pairs

function objectToPairs(obj) {
  let pairs = [];
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      pairs.push([key, obj[key]]);
    }
  }
  return pairs;
}
console.log(objectToPairs({ ob1: "1", obj2: "2" }));
