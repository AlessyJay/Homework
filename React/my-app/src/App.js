import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Counter from "./Counter";

// let i = 0;
// function App() {
//   const [count, setCount] = useState(0);
//   const [language, setLanguage] = useState(`Thai`);
//   useEffect(() => {
//     console.log(`Call`);
//     console.log(i);
//     i++;
//     document.title = `Language: ${language}`;
//     console.log(language);
//   }, [language]);
//   return (
//     <div>
//       <h1>UseEffect</h1>
//       <button onClick={() => setCount((current) => current + 1)}>Click</button>
//       <button
//         onClick={() =>
//           setLanguage((current) => (current === `Thai` ? `English` : `Thai`))
//         }
//       >
//         Change language?
//       </button>
//     </div>
//   );
// }

const App = () => {
  // const [user, setUser] = useState([
  //   {
  //     id: 1,
  //     name: "John",
  //     username: "j.Junior",
  //     phone: 123456789,
  //   },
  // ]);
  // useEffect(() => {
  //   const wait = async () => {
  //     try {
  //       const wait = await axios("https://jsonplaceholder.typicode.com/users", {
  //         method: "GET",
  //       });
  //       setUser(wait.data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   wait();
  // }, []);
  // return (
  //   <div>
  //     <ul>
  //       {user.map((item) => (
  //         <li key={item.id}>
  //           <p>Name: {item.name}</p>
  //           <p>Username: {item.username}</p>
  //           <p>Tel: {item.phone}</p>
  //         </li>
  //       ))}
  //     </ul>
  //   </div>
  // );
  // const [second, setSecond] = useState(0);
  // useEffect(() => {
  //   setInterval(() => {
  //     setSecond((curr) => curr + 1);
  //   }, 1000);
  // });
  // return <h1>{second}</h1>;
  // const [show, setShow] = useState(false);
  // return (
  //   <>
  //     <button onClick={() => (setShow() === false ? true : false)}>
  //       Show counter
  //     </button>{" "}
  //     {show && <Counter />}
  //   </>
  // );
};

export default App;
