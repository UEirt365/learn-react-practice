// Optional property
interface PainOption {
  shape: Shape;
  xPos?: number;
  yPos?: number;
}
interface Shape {}
function paint(option: PainOption) {
  console.log("paint");
}
let shape: Shape = {};
paint({ shape });
paint({ shape, xPos: 1 });
paint({ shape, xPos: 1, yPos: 2 });

// Readonly
interface ReadonlyPerson {
  readonly name: string;
}
let readonlyPerson: ReadonlyPerson = { name: "David" };
// readonlyPerson.name = "David2"; // Not allow

// Extending type
interface Colorful {
  color: string;
}
interface Circle {
  radius: number;
}
interface ColorfulCircle extends Colorful, Circle {}
let extendingType: ColorfulCircle = {
  color: "red",
  radius: 3,
};

// Intersection type
type IntersectionTypeColorfulCircle = Colorful & Circle;
let intersectionTypeColorfulCircle: IntersectionTypeColorfulCircle = {
  color: "blue",
  radius: 7,
};
