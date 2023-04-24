//Write a JavaScript program to get the length of a JavaScript object.
function getLength() {
  return Object.keys(this).length;
}

let student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12,
};

let objsize = getLength.call(student);
console.log("Size of the current object : " + objsize);
