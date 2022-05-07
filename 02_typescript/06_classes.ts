// Readonly
class Greater {
  readonly name: string = "Hello";
  constructor(name?: string) {
    if (name !== undefined) {
      this.name = name;
    }
  }
  err() {
    //   this.name = "Cannot change readonly"
  }
}
let g = new Greater("Hello2");
// g.name = "Cannot change readonly";

// Super class
class Base {
  k: number = 4;
}
class Child extends Base {
  constructor() {
    super(); // Super must be called first
    console.log(this.k);
  }
}
new Child();

// Getter, setter
class C {
  _length: number = 0;
  get length() {
    return this._length;
  }
  set length(length: number) {
    this._length = length;
  }
}
let c: C = new C();
c.length = 12;
console.log(c.length);

// Class Heritage
interface Pingable {
  ping(): void;
}
class Sonar implements Pingable {
  ping(): void {
    console.log("Sonar ping!!!!");
  }
}
new Sonar().ping();

// Overriding Methods
class OverridingMethodsBase {
  greet() {
    console.log("Hello OverridingMethodsBase");
  }
}
class OverridingMethodsChild extends OverridingMethodsBase {
  greet(message?: string): void {
    if (message === undefined) {
      super.greet();
    } else {
      console.log(`Hello, ${message}`);
    }
  }
}
const om = new OverridingMethodsChild();
om.greet();
om.greet("I'm OverridingMethodsChild");

// Static member
class StaticMember {
  static x: number = 9;
  static print(): void {
    console.log("Hello");
  }
}
console.log(StaticMember.x);
StaticMember.print();

// Generic Classes
class GenericClasses<T> {
  contents: T;
  constructor(t: T) {
    this.contents = t;
  }
}
const genericClasses: GenericClasses<string> = new GenericClasses("Hello");

// Parameter Properties
class Param {
  constructor(
    public readonly x: number,
    protected y: number,
    private z: number
  ) {}
}
const a = new Param(1, 2, 3);
console.log(a.x);
// console.log(a.y);
// console.log(a.z);

//abstract Classes and Members
abstract class ACBase {
  abstract getName(): string;
  printName(): void {
    console.log(`Hello ${this.getName()}`);
  }
}
class AcbChild extends ACBase {
  getName(): string {
    return "AcbChild";
  }
}
const aCBase: ACBase = new AcbChild();
aCBase.printName();

// Relationship between classes
class RBCPerson {
  name: string;
  age: number;
}
class RBCEmployee {
  name: string;
  age: number;
  salary: number;
}
const rBCPerson: RBCPerson = new RBCEmployee();
// const rBCPerson2: RBCEmployee = new RBCPerson(); // Property 'salary' is missing in type 'RBCPerson' but required in type 'RBCEmployee'
