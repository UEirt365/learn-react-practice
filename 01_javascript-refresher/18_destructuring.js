// Array
const arr = [1, 2, 3];
[num1, , num3] = arr;
console.log(num1, num3);

// Object
const person = {
  name: "Max",
  age: 28,
  gender: "male",
};
const { name, gender } = person;
console.log(name, gender);
