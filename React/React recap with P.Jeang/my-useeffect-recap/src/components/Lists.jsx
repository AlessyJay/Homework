import React from "react";
import Items from "./Items";

function Lists(props) {
  const { list, Delete, Edit } = props;
  return (
    <div>
      {list.map((item) => (
        <Items key={item.id} item={item} Delete={Delete} Edit={Edit} />
      ))}
    </div>
  );
}

export default Lists;
