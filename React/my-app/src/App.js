import style from "./style/style.css";
import Hello from "./components/hello";
import Header from "./components/header";
import Footer from "./components/footer";

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
export default App;
