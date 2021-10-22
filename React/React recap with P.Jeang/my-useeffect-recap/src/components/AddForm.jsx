import React, { useState } from "react";

function AddForm(props) {
  const { addItem } = props;
  const [text, setText] = useState(``);
  return (
    <div className="itemForm">
      <input
        type="text"
        placeholder="Enter todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={() => addItem(text)}>Add</button>
    </div>
  );
}

export default AddForm;
