//Write a JavaScript program to calculate the area and perimeter of a circle.

function circle(radius) {
  this.radius = radius;

  this.Area = function () {
    return Math.PI * this.radius * this.radius;
  };
  this.Perimeter = function () {
    return 2 * Math.PI * this.radius;
  };
}

let circle1 = new circle(5);
console.log(circle1.Area().toFixed(2));
console.log(circle1.Perimeter().toFixed(2));
