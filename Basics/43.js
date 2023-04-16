//Write a JavaScript program to check from three given numbers (non negative integers) that two or all of them have the same rightmost digit
function same_last_digit(p, q, r) {
  return p % 10 === q % 10 || p % 10 === r % 10 || q % 10 === r % 10;
}
