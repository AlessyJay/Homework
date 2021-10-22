const { v4: ID } = require("uuid");
const fs = require("fs");

const newUsers = {
  data: [
    {
      id: ID(),
      name: "thomas",
      password: 1234,
    },
    {
      id: ID(),
      name: "victor",
      password: 1234,
    },
    {
      id: ID(),
      name: "jane",
      password: 1234,
    },
  ],
};

// Save the infomation on expenseUsers.json using promise then catch, and async await.
// Promise then catch
const promiseWrite = (file, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, JSON.stringify(data), "utf8", (err) => {
      err ? reject(err) : resolve(data);
    });
  });
};

// promiseWrite("users.json", newUsers)
//   .then(() => {
//     console.log(`Succeeded!`);
//   })
//   .catch((err) => {
//     return console.log(`${err} Something's wrong!`);
//   });

// Using async await
// const asyncWrite = async () => {
//   try {
//     await promiseWrite("users.json", newUsers);
//     console.log(`Succeeded!`);
//   } catch (err) {
//     console.log(`error! ${err}`);
//   }
// };

// asyncWrite();

// Readfile
// const readFile = (file) => {
//   return new Promise((resolve, reject) => {
//     fs.readFile(file, "utf8", (err, succ) => {
//       err ? reject(err) : resolve(succ);
//     });
//   });
// };

// readFile(`users.json`)
//   .then((accept) => {
//     return console.log(accept);
//   })
//   .catch((err) => {
//     return console.log(err);
//   });

// Push file using Promise
// const writeWithPush = (file, data) => {
//   return new Promise((resolve, reject) => {
//     fs.writeFile(file, JSON.stringify(data), "utf8", (err) => {
//       err ? reject(err) : resolve(`Succeeded`);
//     });
//   })
//     .then((result) => {
//       result.PushFile(data);
//       console.log(result);
//     })
//     .catch((error) => {
//       return error;
//     });
// };

// writeWithPush("users.json", newUsers);
