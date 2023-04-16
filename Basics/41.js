//Write a JavaScript program to check three given numbers,
// if the three numbers are same return 30 otherwise return 20 and if two numbers are same return 40

function check(a, b, c) {
  if (a === b && b === c) {
    return 30;
  } else if (a === b || b === c || c === a) {
    return 40;
  } else {
    return 20;
  }
}
check(1, 2, 3);
