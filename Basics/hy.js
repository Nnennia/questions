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
console.log(obj);
console.log(obj[0]); // first item in the obj {obj1 : 'edwin'} (whole object)
let keys = Object.keys(obj[0]); // ['obj1'] (key)
console.log(keys);
let values = Object.values(obj[0]); // ['edwin']  (value)
console.log(values);

function getObjectKey(obj1, value) {
  return Object.keys(obj1).find((key) => obj1[key] === value);
}

const obj1 = {
  employee1: "Alice",
  employee2: "Bobby",
  employee3: "Carl",
};

console.log(getObjectKey(obj1, "Alice")); // 👉️ "employee1"
