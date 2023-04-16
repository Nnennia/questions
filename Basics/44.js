// Write a JavaScript program to check from three given integers
// that whether a number is greater than or equal to 20 and less than one of the others

function check(a, b, c) {
  return (
    (a >= 20 && (a < b || a < c)) ||
    (b >= 20 && (b < a || b < c)) ||
    (c >= 20 && (c < b || c < a))
  );
}

console.log(check(23, 45, 10));
console.log(check(23, 23, 10));
console.log(check(21, 66, 75));
