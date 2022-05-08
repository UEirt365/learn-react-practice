function identity<T>(arg: T) {
  return arg;
}
const i1 = identity("Hello");
const i2 = identity(123);

// Generic Classes
class GenericClasses<T> {
  value: T;
  add: (x: T, y: T) => T;
}
const dc = new GenericClasses<number>();
dc.value = 10;
dc.add = (x, y) => {
  return x + y;
};
console.log(dc.add(2, 4));
const dc2 = new GenericClasses<string>();
dc2.value = "10";
dc2.add = (x, y) => {
  return x + y;
};
console.log(dc2.add("2", "4"));

// Generic Constraints
interface Lengthwise {
  length: number;
}
function genericConstraints<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}
genericConstraints({ length: 33, value: 22 });

// Using Type parameters in generic contrains
function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
  return obj[key];
}
let x = { a: 1, b: 2 };
getProperty(x, "a");
// getProperty(x, "c"); // Argument of type 'c' is not assignable to parameter of type 'a' | 'b'

// Using class type in generic
class BeeKeeper {
  hasMask: boolean = true;
}
class ZooKeeper {
  nameTag: string = "Mikle";
}
class Animal {
  numLeg: number = 4;
}
class Bee extends Animal {
  keeper: BeeKeeper = new BeeKeeper();
}
class Lion extends Animal {
  keeper: ZooKeeper = new ZooKeeper();
}
function createInstance<A extends Animal>(x: new () => A): A {
  return new x();
}
console.log(createInstance(Lion).keeper.nameTag);
console.log(createInstance(Bee).keeper.hasMask);
