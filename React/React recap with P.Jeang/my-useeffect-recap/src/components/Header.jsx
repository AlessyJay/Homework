import React, { useState, useEffect } from "react";

function Header() {
  const [time, setTime] = useState();
  useEffect(() => {
    setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
  }, [time]);
  return (
    <div className="TodoHeader">
      <h1>TodoLists with API</h1>
      <p>
        {new Date().toLocaleDateString(`en-GB`, {
          day: "numeric",
          month: "short",
          weekday: "short",
          year: "numeric",
        })}{" "}
      </p>
      <p>Time: {time}</p>
    </div>
  );
}

export default Header;
