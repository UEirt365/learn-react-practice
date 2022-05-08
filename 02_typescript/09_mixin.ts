// NOTE: For running correctly with getter, setter, use this command: tsc -t es5 06_classes.ts

class Sprite {
  name: string = "";
  x: number = 0;
  y: number = 0;
  constructor(name: string) {
    this.name = name;
  }
}
type Contructor = new (...args: any[]) => {};
function Scale<TBase extends Contructor>(Base: TBase) {
  return class Scaling extends Base {
    _scale = 1;
    setScale(scale: number) {
      this._scale = scale;
    }
    get scale(): number {
      return this._scale;
    }
  };
}
const EightBitSprite = Scale(Sprite);
const flappySprite = new EightBitSprite("Bird");
flappySprite.setScale(0.8);
console.log(flappySprite.scale);
console.log(flappySprite.scale);

// From Youtube
type Class = new (...args: any[]) => any;
function DisposeableMixin<Base extends Class>(base: Base) {
  return class extends base {
    dispose: number = 1;
    disposeMethod() {
      console.log("dispose");
    }
  };
}
function ActivatableMixin<Base extends Class>(base: Base) {
  return class extends base {
    isActive: boolean = true;
    active() {
      console.log("active");
      this.isActive = true;
    }
    inactive() {
      console.log("inactive");
      this.isActive = false;
    }
  };
}
const Example = DisposeableMixin(
  ActivatableMixin(
    class {
      value: number = 9;
    }
  )
);
const example = new Example();
example.disposeMethod();
console.log(example.dispose);
example.active();
example.inactive();
console.log(example.isActive);
console.log(example.value);
