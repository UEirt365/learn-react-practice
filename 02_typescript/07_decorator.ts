// NOTE: For running correctly, use this command: tsc --target ES5 --experimentalDecorators 07_decorator.ts

// Example youtube
function logger(message: string) {
  return function logger(contructor: Function) {
    console.log(`Message: ${message}`);
    console.log(contructor);
  };
}
@logger("Person Logger")
class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  display(): void {
    console.log(`Name: ${this.name}`);
  }
}
let p: Person = new Person("David");
p.display();

// Decorator Composition
function first() {
  console.log("First called!");
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("first result called!");
  };
}
function second() {
  console.log("second called!");
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("second result called!");
  };
}
class DecoratorComposition {
  @first()
  @second()
  method() {}
}

// Class Decorator
function Component(options: { id: string }) {
  return (target: Function & typeof TestClass) => {
    target.prototype.id = options.id;
    target.elementId = options.id;
  };
}
@Component({
  id: "hello",
})
class TestClass {
  static elementId: string;
  id: number;
  printId(prefix: string = "") {
    return `${prefix}-${this.id}`;
  }
}
console.log(TestClass.elementId);
console.log(new TestClass().printId("Alo"));

// Method decorator
console.log(`====================Method decorator`);
function MethodTest(
  target: Object,
  propertyKey: string,
  propertyDescriptor: PropertyDescriptor
) {
  console.log(target);
  console.log(propertyKey);
  propertyDescriptor.value = function (...args: any[]): string {
    return `Hello - ${args}`;
  };
}
class MethodTestClass {
  id: number = 9;
  @MethodTest
  printId(prefix: string = ""): string {
    console.log(`printId called!`);
    return `${prefix}-${this.id}`;
  }
}
console.log(new MethodTestClass().printId("ok"));

// Property decorator
console.log(`====================Property decorator`);
function Prop(target: Object, propertyName: string) {
  let value: number;
  const getter = () => {
    console.log("Getting value ... ");
    return value;
  };
  const setter = (newValue: number) => {
    console.log(`Setting value ${newValue} `);
    value = newValue;
  };
  Object.defineProperty(target, propertyName, { get: getter, set: setter });
}
class PropDecoClass {
  @Prop
  id: number;
}
const pdc = new PropDecoClass();
pdc.id = 100;
console.log(pdc.id);

// Parameter decorator
console.log(`====================Parameter decorator`);
function Param(target: Object, propertyName: string, index: number) {
  console.log(propertyName, index);
}
class PDClass {
  id: number = 9;
  printId(@Param prefix: string) {
    return `${prefix} - ${this.id}`;
  }
}
console.log(new PDClass().printId("Hello"));
