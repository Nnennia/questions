//Write a JavaScript program to capitalize the first letter of each word in a given string

function capitalizeFirstLetter(string) {
  return string
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

console.log(capitalizeFirstLetter("hello world is this true"));
