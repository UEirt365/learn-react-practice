// Object
const person: {
  name: string;
  age: number;
  hobbies: string[];
  roles: [number, string];
} = {
  name: "Max",
  age: 30,
  hobbies: ["sports", "reading"],
  roles: [2, "admin"],
};
console.log(person.name);
console.log(person.hobbies);
console.log(person.roles);

// Type Aliases
type Combinable = string | number;
type ConversionDescriptor = "as-text" | "as-number";

function combine(
  input1: Combinable,
  input2: Combinable,
  conversion: ConversionDescriptor
) {
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    conversion === "as-number"
  ) {
    return +input1 + +input2;
  } else {
    return input1.toString() + input2.toString();
  }
}

console.log(combine(2, 4, "as-number"));
console.log(combine(2, "4", "as-number"));
console.log(combine(2, "4", "as-text"));
