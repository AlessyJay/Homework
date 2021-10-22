const axios = require("axios");

// First way of writing axios .
// axios({ url: "https://jsonplaceholder.typicode.com/posts", method: "GET" })
//   .then((res) => {
//     console.log(res.status);
//     console.log(res.statusText);
//     console.log(res.headers);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// 2nd way of writing axios
// const main = async () => {
//   try {
//     const wait = await axios("https://jsonplaceholder.typicode.com/posts", {
//       method: "GET",
//     });
//     console.log(wait.status);
//     console.log(wait.statusText);
//     console.log(wait.headers);
//   } catch (err) {
//     console.log(err);
//   }
// };

// main();

// 3rd way of writing axios
// const main = async () => {
//   try {
//     const wait = await axios.get(
//       "https://jsonplaceholder.typicode.com/users/1"
//     );
//     // console.log(wait.status);
//     // console.log(wait.statusText);
//     // console.log(wait.headers);
//     console.log(wait);
//     console.log(wait.status);
//   } catch (err) {
//     console.log(err);
//   }
// };

// main();

// Get user that has id = 1 from other API using axios
// const main = async () => {
//   try {
//     const wait = await axios("https://jsonplaceholder.typicode.com/users/1", {
//       method: "GET",
//     });
//     console.log(wait);
//     console.log(wait.status);
//   } catch (err) {
//     console.log(err);
//   }
// };

// main();

// Delete todo
// const main = async () => {
//   try {
//     const wait = await axios("https://jsonplaceholder.typicode.com/todos/1", {
//       method: "DELETE",
//     });
//     console.log(wait.data);
//     console.log(wait.statusText);
//   } catch (err) {
//     console.log(err);
//   }
// };

// main();

// posts/1/comment
// const wait = async () => {
//   try {
//     const wait = await axios.get(
//       "https://jsonplaceholder.typicode.com/posts/1/comments"
//     );
//     console.log(wait.data);
//     console.log(wait.status);
//   } catch (err) {
//     return err;
//   }
// };

// wait();

// const wait = async () => {
//   try {
//     const wait = await axios.get(
//       "https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49"
//     );
//     console.log(wait.data);
//   } catch (err) {
//     return err;
//   }
// };

// wait();

// COVID-19 cases
const wait = async () => {
  try {
    const wait = await axios.get(
      "	https://covid19.ddc.moph.go.th/api/Cases/today-cases-all"
    );
    console.log(wait.data);
    console.log(wait.status);
  } catch (err) {
    return err;
  }
};

wait();
