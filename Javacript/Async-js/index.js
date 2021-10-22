const { v4: ID } = require(`uuid`);
const fs = require(`fs`);
const { createBrotliCompress } = require("zlib");
const { resolve } = require("path");

// try {
//   const name = "John";
//   name = "Jim";
//   console.log(firstName);
// } catch (err) {
//   console.log(err);
//   console.log(err.name);
//   console.log(err.message);
// }

// try {
//   //   const input = {
//   //     name: "john",
//   //     lastName: "Joes",
//   //     age: `Ten`,
//   //     birthDate: "18/01/1945",
//   //   };
//   const input = {
//     payee: "",
//     amount: -300,
//     category: "Expense",
//     date: "17-07-2021",
//   };
//   if (input.amount <= 0) {
//     throw new Error(`Age must be numerical!`);
//   }
// } catch (err) {
//   console.log(err);
// }

// try {
//   const user = { username: "John", password: "123456", bithDate: "18/71/2000" };
//   if (user.password.length < 6) {
//     throw new Error(`Password must be at least 6 digit long!`);
//   }
//   if (isNaN(new Date(user.bithDate).getTime())) {
//     throw new Error(`Invalid Date!`);
//   }
// } catch (err) {
//   console.log(err.message);
// }

// const obj = {
//   name: "Thomas",
//   lastName: "Joes",
//   age: 25,
//   sayHi: function () {
//     console.log(`Hi!`);
//   },
//   sex: null,
// };

// const num = 100; // convert number into string using JSON

// const json = JSON.stringify(num);
// console.log(typeof json);

// const response = '{"status": "success", "time": "18:06"}';
// const parseResponse = JSON.parse(response);
// console.log(response);
// console.log(parseResponse);

// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   wife: undefined,
//   getFullName() {
//     return this.firstName + " " + this.lastName;
//   },
// };

// console.log(JSON.stringify(person));
// console.log(JSON.parse(person));

// console.log(`A`);
// const id = setInterval(() => console.log(`*`), 2000);
// setTimeout(() => clearInterval(id), 5000);
// console.log()

// navigator.geolocation.getCurrentPosition((pos) => console.log(pos));

// fs.readFile(`expense.json`, `utf8`, (error, data) => {
//   // console.log(data);
//   // console.log(error);
//   b = data;
//   setTimeout(() => console.log(b), 1000);
// });

// fs.readFile("product.json", "utf8", (error, data) => {
//   console.log(data);
//   console.log(error);
// });

// const data = {
//   transactions: [
//     {
//       id: 4,
//       name: "carrot",
//       price: 2.99,
//     },
//   ],
// };

// fs.writeFile("transaction.json", JSON.stringify(data), "utf8", (error) => {
//   if (error) console.log(`There's something wrong about it, check it again!`);
//   else console.log(`Everything's perfect!`);
// });

// fs.readFile("expenseUsers.json", "utf8", (error, data) => {
//   if (error) return console.log(error);
//   const users = JSON.parse(data).user;
//   const targetUser = users.find((item) => item.id === `2`);
//   console.log(users);

//   fs.readFile("product.json", "utf8", (error, data) => {
//     if (error) return console.log(error);
//     const product = JSON.parse(data).products;
//     const targetProduct = product.find((item) => item.id === `2`);
//     console.log();

//     const newData = {
//       transaction: [
//         {
//           id: ID(),
//           email: targetUser.email,
//           product: targetProduct.name,
//           price: targetProduct.price,
//           amount: 5,
//         },
//       ],
//     };

//     fs.writeFile(
//       `transaction.json`,
//       JSON.stringify(newData),
//       "utf8",
//       (error) => {
//         if (error) return console.log(error);
//       }
//     );
//   });
// });

// Lab.1
// const alphabets = [
//   "A",
//   "B",
//   "C",
//   "D",
//   "E",
//   "F",
//   "G",
//   "H",
//   "I",
//   "J",
//   "K",
//   "L",
//   "M",
//   "N",
//   "O",
//   "P",
//   "Q",
//   "R",
//   "S",
//   "T",
//   "U",
//   "V",
//   "W",
//   "X",
//   "Y",
//   "Z",
// ];

// const order = alphabets.map((item) =>
//   setTimeout(() => console.log(item), 1000)
// );
// console.log(alphabets);
// setInterval(() => console.log(order), 1000);

// fs.readFile("expenseUsers.json", "utf8", (error, data) => {
//   if (error) return console.log(error);
//   else return console.log(`${data} There are no errors!`);
// });

// Promise
// console.log(`A`);
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log(promise);
//     resolve(`Done!`), 3000;
//   });
// });
// console.log(`B`);

// const promisify = new Promise((resolve, reject) => {
//   fs.readFile("expenseUsers.json", "utf8", (error, data) => {
//     if (error) reject(error);
//     resolve(data);
//   });
// });

// promisify.then(
//   (result) => {
//     console.log(result);
//   },
//   (error) => {
//     console.log(error);
//   }
// );

// promise
// From second 0 to 3: state = pending, result = undefined
// From second 3 and so on: state = fulfill, resule = Done!

// const rejectPromise = new Promise((resolve, reject) => {
//   setTimeout(reject(new Error(`Reject promise`)), 3000);
// });

const promisifyProduct = new Promise((resolve, reject) => {
  fs.readFile("product.json", "utf8", (error, data) => {
    if (error) {
      reject(error);
    } else {
      resolve(JSON.parse(data).products);
    }
  });
});

// promisifyProduct.then( // 1st type of .then and catch
//   (result) => {
//     console.log(result);
//   }
//   // (err) => {
//   //   console.log(err);
//   // }
// );

// promisifyProduct.catch((error) => {
//   console.log(error);
// });

// 2nd way of how to write .then and .catch
// promisifyProduct
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// 3rd way of how to write .then and .catch
// const Success = (result) => {
//   return console.log(result);
// };

// const Error = (err) => {
//   return console.log(err);
// };

// promisifyProduct.then(Success).catch(Error);

// const promise = new Promise((result, reject) => {
//   if (result) {
//     for (let i = 0; i <= 24; i++) {
//       setTimeout(() => {
//         console.log(i);
//       }, 1000);
//     }
//   } else {
//     return reject;
//   }
// });

// promise
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// Chaining promises
// const promise = new Promise((success) => {
//   success(1);
// });

// promise
//   .then((result) => {
//     console.log("Then 1: " + result);
//     return result * 2;
//   })
//   .then((result) => {
//     console.log("Then 2: " + result);
//     return result * 3;
//   })
//   .then((result) => {
//     console.log("Then 3: " + result);
//     return result * 4;
//   });

// const promise = (ms) => {
//   return new Promise((success, reject) => {
//     for (let i = 1; i <= 50; i++) {
//       setTimeout(() => {
//         console.log(i);
//       }, ms * i);
//     }
//   });
// };

// promise(1000);

// Create a function to draw a dice, if it is < 3 then reject, if > 3 then continue drawing the dice.
// let random = Math.floor(Math.random() * 6) + 1;
// const promise = () => {
//   return new Promise((resolve, reject) => {
//     let dice = dice + random;
//     resolve(random);
//   });
// };

// promise()
//   .then((result1) => {
//     console.log(`This round dice ${result1}`);
//     return result1;
//   })
//   .then((result2) => {
//     let random2 = random;
//     console.log(`This round dice ${result2 + result2}`);
//     return result2 + random2;
//   })
//   .then((result3) => {
//     let random3 = random;
//     console.log(`This round dice ${result3 + result3}`);
//     return result3 + random3;
//   });

// let random = Math.floor(Math.random() * 6) + 1;
// const play = () => {
//   return new Promise((resolve, reject) => {
//     const score = random;
//     if (score > 3) {
//       resolve(score);
//     } else {
//       reject(score);
//     }
//   });
// };
// play()
//   .then((result1) => {
//     console.log(`Continue: ${result1}`);
//     return play();
//   })
//   .then((result2) => {
//     console.log(`Continue: ${result2}`);
//     return play();
//   })
//   .then((result3) => {
//     console.log(`Continue: ${result3}`);
//     return play();
//   })
//   .catch((error) => {
//     console.log(`Stop: ${error}`);
//   });

// Solution 1
// const readFiles = (file) => {
//   return new Promise((resolve, reject) => {
//     fs.readFile(file, "utf8", (err, data) => {
//       err ? reject(err) : resolve(JSON.parse(data));
//     });
//   });
// };

// readFiles("number.json").then((resultNumber) => {
//   readFiles("product.json").then((resultProduct) => {
//     const product = resultProduct.products[1].price;
//     console.log(resultNumber * product);
//   });
// });

// Promise.all
// const promiseArray = [fs.readFile("number.json"), fs.readFile("product.json")];
// Promise.all(promiseArray)
//   .then((result) => {
//     console.log(result[0] + result[1].products.price);
//     console.log(result[0] * result[1].products.price);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Async await
// const fn = async () => {
//   const number = await fs.readFile("number.json");
//   const data = await fs.readFile("product.json");
//   console.log(number + data[1].products.price);
//   console.log(number * data[1].products.price);
// };

// fn().then(() => {
//   console.log(`call fn`);
// });
