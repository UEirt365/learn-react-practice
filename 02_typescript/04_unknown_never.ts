// Type unknown
let userInput: unknown;
let userName: string;

userInput = 8;
userInput = "ok";

if (typeof userInput === "string") {
  userName = userInput;
}
console.log(userName);

// Type never
function generateError(message: string, code: number): never {
  throw { message, errorCode: code };
}
generateError("An error occurred!", 500);
// console.log("yui"); // unreachable
