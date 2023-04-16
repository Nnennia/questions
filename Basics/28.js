//Write a JavaScript program to check whether two given integer values are in the range 50..99 (inclusive).
//Return true if either of them are in the said range.

function check(n, y) {
  if ((n < 99 && n < 50) || (y < 50 && y < 99)) {
    return false;
  } else {
    return true;
  }
}

console.log(check(5));
