// Write a JavaScript program to delete the rollno property from the following object.
//Also print the object before or after deleting the property

let person = {
  name: "John",
  age: 20,
  class: "SS1",
  rollno: 1234567890,
};
console.log(person);
delete person.rollno;
console.log(person);
