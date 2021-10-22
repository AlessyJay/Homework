import "./style/style.css";
import { useState } from "react";
import axios from "axios";

function App() {
  // localStorage.setItem(`message`, `Welcome localStorage`);
  const [username, setUsername] = useState(``);
  const [password, setPassword] = useState(``);
  const [register, setRegister] = useState();

  console.log(username);
  console.log(password);

  const handleSubmitLogin = async (e) => {
    try {
      e.preventDefault();
      const read = await axios(`http://localhost:8000/login`, {
        method: "POST",
        data: { username: username, password: password },
      });
      console.log(read);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="App">
      <div className="container">
        <nav>
          <h1>GREENT</h1>
          <div className="options">
            <ul>
              <li>Home</li>
              <li>Contact us</li>
              <li>Shop</li>
            </ul>
          </div>
        </nav>
        <header>
          <h1>Login</h1>
        </header>
        <div className="content">
          <form className="login-form" onSubmit={handleSubmitLogin}>
            <label htmlFor="email">Username</label>
            <input
              type="text"
              id="email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor="password">Password</label>
            <input
              type="text"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button>Sign In</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
