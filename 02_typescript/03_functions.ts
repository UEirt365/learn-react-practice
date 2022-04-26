function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(value: number): void {
  console.log(value);
}

printResult(add(2, 3));

let combineValue: (a: number, b: number) => number;

combineValue = add;
// combineValue = printResult // Won't work

function addAndHandle(n1: number, n2: number, cb: (value: number) => void) {
  cb(n1 + n2);
}

addAndHandle(3, 5, (result: number) => {
  console.log(result);
});
