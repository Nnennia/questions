//Write a JavaScript program to find the largest of three given integers
function check(a, b, c) {
  if (a > b && a > c) {
    return a;
  } else if (b > c && b > a) {
    return b;
  } else {
    return c;
  }
}
console.log(check(48037, 89, 3));
