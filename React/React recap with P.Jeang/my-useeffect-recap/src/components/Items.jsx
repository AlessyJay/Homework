import axios from "axios";
import React, { useState, useEffect } from "react";

function Items(props) {
  const {
    item: { id, name, status },
    Delete,
    Edit,
  } = props;

  const [itemStatus, setItemStatus] = useState(status);
  const [toggle, setToggle] = useState(true);
  const [editText, setEditText] = useState(name);

  useEffect(() => {
    console.log(toggle);
  }, [toggle]);

  const saveBtn = () => {
    Edit(id, editText);
    setToggle(true);
  };

  return (
    <div className="items">
      <div className="itemInput">
        <input
          type="text"
          readOnly={toggle}
          onChange={(e) => setEditText(e.target.value)}
          value={editText}
          className={itemStatus ? `` : `red`}
        />
      </div>
      <div className="btnAddDel">
        {toggle ? (
          <>
            <button
              onClick={() => {
                setToggle(false);
              }}
            >
              Edit
            </button>
            <button onClick={() => Delete(id)}>Delete</button>
          </>
        ) : (
          <>
            <button
              onClick={() => {
                saveBtn();
              }}
            >
              Save
            </button>
            <button
              onClick={() => {
                setItemStatus((turn) => !turn);
              }}
            >
              Status
            </button>
            <button
              onClick={() => {
                setToggle(true);
              }}
            >
              Cancel
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Items;
