import React from "react";
import { useState } from "react";
import { curr } from "../service/currencyService";

function ProductCards({ product, onAdd }) {
  return (
    <div style={{ width: "50%" }}>
      <div className="productCard">
        <img src={product.img} alt="product" className="img" />
        <hr style={{ color: "black", border: "1px solid black" }} />
        <div className="detail">
          <h1>{product.name}</h1>
          <p>{product.description}</p>
        </div>
        <div className="btnAdd">
          <h3>Price: {curr(product.price)}</h3>
          <button onClick={() => onAdd(product)}>Add to cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCards;
