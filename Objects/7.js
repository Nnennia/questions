//Write a JavaScript program which returns a subset of a string
String.prototype.sub_String = function () {
  let subset = [];
  for (let m = 0; m < this.length; m++) {
    for (let n = m + 1; n < this.length + 1; n++) {
      subset.push(this.slice(m, n));
    }
  }
  return subset;
};

console.log("dog".sub_String());
