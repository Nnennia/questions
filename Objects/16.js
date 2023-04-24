//Write a JavaScript function to get a copy of the object where the keys become the values and the values are the keys.
function invertKeyValues() {
  let obj = {};
  for (let i = 0; i < arguments.length; i++) {
    for (let key in arguments[i]) {
      obj[arguments[i][key]] = key;
    }
  }
  return obj;
}

console.log(
  invertKeyValues({ red: "#FF0000", green: "#00FF00", white: "#FFFFFF" })
);
