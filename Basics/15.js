//Write a JavaScript program to get the difference between a
//given number and 13, if the number is greater than
//13 return double the absolute difference
function difference(number) {
  if (number <= 13) {
    return 13 - number;
  } else {
    return 2 * (number - 13);
  }
}

console.log(difference(32));
