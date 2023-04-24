//Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes
function Cylinder(height, diameter) {
  this.height = height;
  this.diameter = diameter;
}

Cylinder.prototype.Volume = function () {
  let radius = this.diameter / 2;
  return this.height * Math.PI * radius * radius;
};

let cylinder1 = new Cylinder(10, 10);
console.log(`volume is ${cylinder1.Volume().toFixed(2)}`);
