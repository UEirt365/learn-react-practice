// Map
const arr = [1, 2, 3, 4];
console.log(arr.map((item) => item * 2));

// Find
const arr2 = [1, 2, 3, 4];
console.log(
  arr2.find((element) => {
    return element > 2;
  })
);

// Find index
const arr3 = [1, 2, 3, 4];
console.log(
  arr3.findIndex((e) => {
    return e > 1;
  })
);

// Reduce
const arr4 = [1, 2, 3, 4];
console.log(arr4.reduce((pre, current) => pre + current));

// Concat
const arr51 = [1, 2, 3, 4];
const arr52 = [4, 5, 6];
const arr53 = [7, 9];
console.log(arr51.concat(arr52, arr53));
console.log(arr51);

// Slice
const arr6 = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(arr6.slice(3));
console.log(arr6.slice(3, 5));
console.log(arr6.slice(3, -1));
console.log(arr6.slice(-2)); // [7, 8]

// Splice
const arr71 = [1, 2, 3, 4, 5, 6];
arr71.splice(1, 0, 88);
console.log(arr71);
const arr72 = [1, 2, 3, 4, 5, 6];
arr72.splice(1, 2, 88, 99, 11, 22, 33);
console.log(arr72);
