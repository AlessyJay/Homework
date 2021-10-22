import React from "react";

function Header({ countCard }) {
  return (
    <>
      <nav>
        <h1 className="h1-shopping">Shopping</h1>
        <ul className="options">
          <li>Home</li>
          <li>About</li>
          <li>
            Cart{" "}
            <span
              style={{
                background: "black",
                borderRadius: "30%",
                width: "5rem",
                color: "white",
              }}
            >
              {countCard}
            </span>
          </li>
        </ul>
      </nav>
      <hr style={{ color: "black", border: "2px solid black" }} />
    </>
  );
}

export default Header;
