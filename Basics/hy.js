// let stella = [1, 2, 3];
// let Edwin = [];

// for (let i of stella) {
//   Edwin.push(i);
// }

// console.log(Edwin);
// console.log(stella);

const obj = [
  {
    obj1: "edwin",
  },
  {
    obj2: "stella",
  },
];
console.log(obj[0]); // first item in the obj {obj1 : 'edwin'} (whole object)
let keys = Object.keys(obj[0]); // ['obj1'] (key)
console.log(keys);
let values = Object.values(obj[0]); // ['edwin']  (value)
console.log(values);
