//Write a Bubble Sort algorithm in JavaScript

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
console.log(bubbleSort([6, 4, 0, 3, -2, 1]));

Array.prototype.bubbleSort_algo = function () {
  let is_sorted = false;
  while (!is_sorted) {
    is_sorted = true;
    for (let n = 0; n < this.length - 1; n++) {
      if (this[n] > this[n + 1]) {
        let x = this[n + 1];
        this[n + 1] = this[n];
        this[n] = x;
        is_sorted = false;
      }
    }
  }
  return this;
};

console.log([6, 4, 0, 3, -2, 1].bubbleSort_algo());
