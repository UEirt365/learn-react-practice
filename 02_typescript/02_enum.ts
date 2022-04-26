enum Role {
  ADMIN = 0,
  READ_ONLY = "1",
  AUTHOR = 3,
}

const role: Role = Role.AUTHOR;
console.log(role);
let myRole: number;
myRole = Role.ADMIN
// myRole = Role.READ_ONLY -- Not allow
