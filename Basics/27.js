// Write a JavaScript program to check whether a string starts with 'Java' and false otherwise.
function start_spec_str(str) {
  if (str.length < 4) {
    return false;
  }
  front = str.substring(0, 4);
  if (front == "Java") {
    return true;
  } else {
    return false;
  }
}

function check(word) {
  if (word.includes("java")) {
    return true;
  } else {
    // includes "java"
    return false;
  }
}

console.log(check("javascript"));
