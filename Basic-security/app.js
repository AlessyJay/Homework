// const bcryptjs = require("bcryptjs");
// const password = `123456`;
// const hashToCheck = `$2a$12$0KHkBZw2bwp4e9Qt08hpK.pG5mhL.RZP1ra2ncJsPYk9.XTuQGVpC`;
const JWT = require("jsonwebtoken");

const payload = {
  firstname: "John",
  lastname: "Wick",
  age: 24,
};

const secretKey = "valawidada";
const token = JWT.sign(payload, secretKey, { expiresIn: "3h" });
// console.log(token);
const DecodedPayload = JWT.verify(
  `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdG5hbWUiOiJKb2huIiwibGFzdG5hbWUiOiJXaWNrIiwiYWdlIjoyNCwiaWF0IjoxNjMyNzI4OTIwLCJleHAiOjE2MzI3Mzk3MjB9.hk5w_6w6mgcAjAIxkvDHPJLix4_IZiPy8xG93XYb9Ec`,
  secretKey
);
console.log(DecodedPayload);

const run = async () => {
  //   const hashPassword = await bcryptjs.hash(password, 12);
  //   console.log(hashPassword);
  //   const isCorrectPassword = await bcryptjs.compare(password, hashToCheck);
  //   console.log(isCorrectPassword);
};

run();
