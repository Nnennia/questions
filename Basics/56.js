//Write a JavaScript program to divide two positive numbers and return the result as string with properly formatted commas.

function divide(a, b) {
  let result = Math.round(a / b)
    .toString()
    .split("");
  if (result >= 1000) {
    for (let i = result.length - 3; i > 0; i -= 3) {
      result.splice(i, 0, ",");
    }
  }
  return result;
}
console.log(divide(80, 6));
