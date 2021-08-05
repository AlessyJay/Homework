import style from "./style/style.css";
import Hello from "./components/hello";
import Header from "./components/header";
import Footer from "./components/footer";
import React, { Children, useState } from "react";
import Div from "./components/div";
import TodoList from "./components/todoList";

// Lab 1

// function App() {
//   return (
//     <div>
//       <div className="container">
//         <h1>Hello my friends!</h1>
//         <div>
//           <p style={{ fontSize: "34px", fontWeight: "bolder" }}>
//             Introducing my friends!
//           </p>
//           <ul className="friends">
//             <li>Jack</li>
//             <li>Jim</li>
//             <li>James</li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

// Lab 2
// function App() {
//   return (
//     <div>
//       <div className="province">
//         <h1>Province: </h1>
//         <select>
//           <option>Center</option>
//           <option>West</option>
//           <option>North</option>
//         </select>
//       </div>
//       <div className="city">
//         <h1>City: </h1>
//         <select>
//           <option>London</option>
//           <option>Belfast</option>
//           <option>Manchester</option>
//         </select>
//       </div>
//     </div>
//   );
// }

// Lab 3
// function App() {
//   const handleClick = () => {
//     alert(`click!`);
//   };
//   const handleSubmit = () => {
//     alert(`Form submitted!`);
//   };
//   const handleChange = () => {
//     alert(`Your value has been changed!`);
//   };
//   const handleClickWithID = (id) => {
//     alert(id);
//   };

//   return (
//     <div
//       style={{
//         display: "flex",
//         flexDirection: "row",
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <div className="btnPls">
//         <button className="pls" onClick={handleClick}>
//           +
//         </button>
//       </div>
//       <div className="counter">
//         <h1 className="cnt">0</h1>
//       </div>
//       <div className="btnMin">
//         <button className="min" onClick={() => alert(`Annonymus function`)}>
//           -
//         </button>
//       </div>

//       <form onSubmit={handleSubmit}>
//         <button>Submit</button>
//         <select onChange={handleChange}>
//           <option>1</option>
//           <option>2</option>
//           <option>3</option>
//         </select>
//       </form>

//       <button onClick={() => handleClickWithID(1)}>1</button>
//       <button onClick={() => handleClickWithID(2, event.preventDefault)}>
//         2
//       </button>
//       <button onClick={() => handleClickWithID(3)}>3</button>
//     </div>
//   );
// }

// Lab 4
// function App() {
//   return (
//     <div>
//       <div className="add">
//         <button className="btnAdd">Add</button>
//       </div>
//       <div className="task1">
//         <h1>Task1</h1>
//         <button>Edit</button>
//         <button>Delete</button>
//       </div>
//       <div className="task2">
//         <h1>Task2</h1>
//         <button>Edit</button>
//         <button>Delete</button>
//       </div>
//     </div>
//   );
// }

// Sheet 2
// Lab 1
// function App() {
//   return (
//     <div>
//       <div className="container">
//         <input onChange={(event) => console.log(event.target.value)}></input>
//       </div>
//     </div>
//   );
// }

// Lab 2
// function App() {
//   return (
//     <div>
//       <select onChange={(event) => console.log(event.target.value)}>
//         <option>Poland</option>
//         <option>England</option>
//         <option>China</option>
//         <option>America</option>
//         <option>Argentina</option>
//       </select>
//     </div>
//   );
// }

// Lab 3
// function App() {
//   const checkList = (event) => {
//     console.log(`Name: ${event.target.name}`);
//     console.log(`Status: ${event.target.value}`);
//     console.log(`Status: ${event.target.checked ? "Ticked" : "Unticked"}`);
//   };
//   return (
//     <div>
//       <div onChange={checkList}>
//         <input type="checkbox" id="brand1" name="brand1" value="MSI" />
//         <label htmlFor="brand1">Brand 1</label>
//       </div>
//       <div onChange={checkList}>
//         <input type="checkbox" id="brand2" name="brand2" value="Asus" />
//         <label htmlFor="brand2">Brand 2</label>
//       </div>
//       <div onChange={checkList}>
//         <input type="checkbox" id="brand3" name="brand3" value="Acer" />
//         <label htmlFor="brand3">Brand 3</label>
//       </div>
//     </div>
//   );
// }

// Lab 4
// function App() {
//   const confirmation = () => {
//     const ask = window.confirm(`Are you sure you want to leave to Google`);

//     if (ask === true) {
//       window.location.href = "https://www.google.co.uk/?gws_rd=ssl";
//     } else {
//     }
//   };

//   return (
//     <div onClick={confirmation}>
//       <a></a>
//       <button>Go to Google!</button>
//     </div>
//   );
// }

// React State
// function App() {
// This way of updating is wrong!
// Use state instead!
// let txt = "Hi friend!";
// const handleClick = () => {
//   txt = "button clicked!";
// };
// Using state
// const update = useState(`Hello React!`); // It's not a default method, we have to import it before calling it.
// let state = update[0];
// let result = update[1];
// const [state, result] = useState(`Hello Goodies!!`); // Shorter version but not good!
//   const [message, setMessage] = useState(`Hello React!`); // Best practice!
//   const [title, setTitle] = useState(`My title`);
//   const handleClick = () => {
//     setMessage(`You clicked!`);
//   };
//   return (
//     <div>
//       <h1>{message}</h1>
//       <button onClick={handleClick}>Change the text!</button>
//       <button onClick={() => setMessage(`You clicked annonymus!`)}>
//         Annonymus!
//       </button>
//     </div>
//   );
// }
// const [count, setCount] = useState(0);
// const add = () => {
//   setCount(count + 1);
// };
// const sub = () => {
//   if (count === 0) {
//     setTimeout(() => {
//       alert(`You hit the minimum!`);
//     });
//   } else {
//     setCount(count - 1);
//   }
// };
// const clear = () => {
//   setCount(count - count);
// };
// return (
//   <div
//     style={{
//       height: "100vh",
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//     }}
//   >
//     <button onClick={add}>+</button>
//     <span style={{ fontSize: "64px", fontWeight: "bolder" }}>{count}</span>
//     <button onClick={sub}>-</button>
//     <div>
//       <button onClick={clear}>Clear</button>
//     </div>
//   </div>
// );

// const [usrename, setUsername] = useState();
// const [password, setPassword] = useState();
// const [email, setEmail] = useState();
// const [birthDate, setBirthDate] = useState();

// const [user, setUser] = useState({
//   user: "",
//   password: "",
//   email: "",
//   birthDate: "",
// });
// }

// Lab 1
// function App() {
//   const hide = (event) => {
//     event.target.style = "display: none";
//   };
//   return (
//     <div>
//       <button onClick={hide}>Click to hide me!</button>
//     </div>
//   );
// }

// Lab 2
// function App() {
//   const [text, setText] = useState(`Click to hide text!`);
//   const update = () => {
//     setText(``);
//   };
//   return (
//     <div>
//       <button onClick={update}>{text}</button>
//     </div>
//   );
// }

// Lab 3
// function App() {
//   const [text, setText] = useState("Hide");
//   const update = () => {
//     if (text === `Hide`) {
//       setText(`Show`);
//     } else {
//       setText(`Hide`);
//     }
//   };
//   return (
//     <div>
//       <button onClick={update}>{text}</button>
//     </div>
//   );
// }

// Lab 4
// function App() {
//   const [currency, setCurrency] = useState(0);
//   const Currency = (event) => {
//     let a = +event.target.value;
//     let total = a * 30;
//     setCurrency(total);
//   };
//   return (
//     <div>
//       <div>
//         <h1>USD: </h1>
//         <input placeholder="Convert" onChange={Currency}></input>
//       </div>
//       <div>
//         <h1>
//           Convert to THB: <span onChange={Currency}>{currency} THB</span>
//         </h1>
//       </div>
//     </div>
//   );
// }

// Lab 5
// function App() {
//   //   const [num, setNum] = useState(``);
//   //   const [error, setError] = useState(``);
//   //   const errorMessage = error ? (
//   //     <h1
//   //       style={{ border: "2px solid red", color: "red", fontWeight: "bolder" }}
//   //     ></h1>
//   //   ) : null;
//   //   const style = error
//   //     ? { border: "2px solid red", color: "red", fontWeight: "bolder" }
//   //     : {};

//   //   const Input = (event) => {
//   //     setNum(event.target.value);
//   //   };
//   //   const checkUpdate = (event) => {
//   //     if (setNum.length < 10) {
//   //     } else {
//   //       alert(`Valid number`);
//   //     }
//   //   };

//   const [state, setState] = useState({
//     error: ``,
//     number: ``,
//     message: ``,
//   });

//   const Input = (e) => {
//     // const newState = { ...state };
//     // newState.number = e.target.value;
//     // setState(newState);

//     setState({ ...state, number: e.target.value }); //Shorter version
//   };
//   const update = (e) => {
//     if (state.number === ``.trim()) {
//       setState({ ...state, error: `Please, insert your phone number!` });
//     } else if (isNaN(state.number)) {
//       setState({ ...state, error: `You number is not correct!` });
//     } else if (state.number.length < 10) {
//       setState({ ...state, error: `Your number is less than 10!` });
//     } else {
//       setState({ ...state, message: `Valid number` });
//     }
//   };
//   return (
//     <div>
//       <input
//         placeholder="Phone number"
//         value={state.number}
//         onChange={Input}
//       ></input>
//       <button onClick={update} id="clicks">
//         Check
//       </button>
//     </div>
//   );
// }

// Lab 6
// function App() {
//   const [cities, setCity] = useState();
//   const update = (event) => {
//     if (event.target.value === `N`) {
//       setCity({
//         city1: "London",
//         city2: "Bangkok",
//         city3: "Warsaw",
//       });
//     } else if (event.target.value === `M`) {
//       setCity({
//         city1: "New York",
//         city2: "Buenos Aires",
//         city3: "Seoul",
//       });
//     } else if (event.target.value === `W`) {
//       setCity({
//         city1: "Berlin",
//         city2: "Canberra",
//         city3: "Rome",
//       });
//     }
//   };
//   return (
//     <div>
//       <div className="province">
//         <h1>Province: </h1>
//         <select onChange={update}>
//           <option value="N">North</option>
//           <option value="M">Middle</option>
//           <option value="W">West</option>
//         </select>
//       </div>
//       <div className="city">
//         <h1>City: </h1>
//         <select onChange={update}>
//           <option></option>
//         </select>
//       </div>
//     </div>
//   );
// }

// Email input and password input example.
// function App() {
//   const [email, setEmail] = useState(``);
//   const [password, setPassword] = useState(``);

//   const btnClear = () => {
//     setEmail(``);
//     setPassword(``);
//   };
//   return (
//     <div>
//       <div>
//         <label>Email</label>
//         <input
//           type="text"
//           value={email}
//           onChange={(event) => setEmail(event.target.value)}
//         ></input>
//       </div>
//       <div>
//         <label>Password</label>
//         <input
//           type="text"
//           value={password}
//           onChange={(event) => setPassword(event.target.value)}
//         ></input>
//       </div>
//       <button onClick={btnClear}>Clear</button>
//     </div>
//   );
// }

// Lab 1 from React sheet 1.2 slice 112
// const friend = ["May", "Mark", "Tim", "Rondo"];
// const render = friend.map((item, index) => <li key={index}>{item}</li>);
// function App() {
//   return <ul>{render}</ul>;
// }

// Lab 2
// const post = [
//   {
//     id: "1",
//     name: "Tommy",
//     date: "19/09/2021",
//   },
// ];
// const render = post.map((item, value) => (
//   <div key={value}>
//     {item.name} {item.date}
//   </div>
// ));
// function App() {
//   return <div>{render}</div>;
// }

// Lab 3
// const post = [
//       {
//         id: "1",
//         name: "Tommy",
//         date: "19/09/2021",
//       },
//       {
//         id: "2",
//         name: "Jimmy",
//         date: "19/09/2021",
//       }
//     ];
// function App() {
//   return (
//     <>
//       <Div title="Happy new year" author="James" date="12/05/2017" />
//       <Div title="Happy new year" author="James" date="12/05/2017" />
//       <Div title="Happy new year" author="James" date="12/05/2017" />
//     </>
//   );
// }

// Lab 4 and 5 is in git branch todoList
export default App;
