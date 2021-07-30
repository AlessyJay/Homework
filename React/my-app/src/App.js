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
//   return (
//     <div
//       style={{
//         display: "flex",
//         flexDirection: "row",
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <div className="btnPls" onclick={() => add}>
//         <button className="pls">+</button>
//       </div>
//       <div className="counter">
//         <h1 className="cnt">0</h1>
//       </div>
//       <div className="btnMin">
//         <button className="min" onclick={() => add}>
//           -
//         </button>
//       </div>
//     </div>
//   );
// }

// function add() {
//   const btnPlus = document.querySelector(".btnPls");
//   const cnt = document.querySelector(".cnt");
//   const btnMinus = document.querySelector(".btnMin");
//   const count = 0;

//   if (
//     btnPlus.addEventListener("click", function () {
//       count += cnt.innerHTML;
//       console.log(cnt);
//     })
//   );

//   if (
//     btnMinus.addEventListener("click", function () {
//       if (cnt.innerHTML === 0) {
//         alert("You just hit the minimum!");
//       } else {
//         count -= cnt.innerHTML;
//         console.log(cnt);
//       }
//     })
//   );
// }

// Lab 4
function App() {
  return (
    <div>
      <div className="add">
        <button className="btnAdd">Add</button>
      </div>
      <div className="task1">
        <h1>Task1</h1>
        <button>Edit</button>
        <button>Delete</button>
      </div>
      <div className="task2">
        <h1>Task2</h1>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  );
}
export default App;
