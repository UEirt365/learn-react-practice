// Array
const number = [1, 2, 3];
const newNumber = [...number, 4];
console.log(newNumber);

// Object
const person = {
  name: "max",
};
const newPerson = {
  ...person,
  age: 28,
};
console.log(newPerson);

// Filter
const filter = (...args) => {
  return args.filter((e) => e !== 1);
};
console.log(filter(1, 2, 3, 4));
