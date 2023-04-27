//Write a JavaScript program to extract the first half of a even string.

function firstHalf(str) {
  if (str.length % 2 == 0) {
    return str.slice(0, str.length / 2);
  } else {
    return false;
  }
}
console.log(firstHalf("wowoow"));
