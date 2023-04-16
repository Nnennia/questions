//Write a JavaScript program to find a value which is nearest to 100 from two different given integer values.
function check(a, b) {
  if (a != b) {
    a1 = Math.abs(a - 100);
    b2 = Math.abs(b - 100);
    if (a1 > b2) {
      return b;
    } else {
      return a;
    }
  } else {
    return false;
  }
}
console.log(check(-90, -90));
