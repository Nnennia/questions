//Write a JavaScript program to convert a given number into hours and minutes.
function convert(number) {
  let hours = Math.floor(number / 60);
  let minutes = number % 60;
  return `${hours}hrs:${minutes}mins`;
}
