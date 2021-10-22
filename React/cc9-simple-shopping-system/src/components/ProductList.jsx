import React from "react";
import ProductCards from "./ProductCards";

function ProductList({ Products, onAdd }) {
  // console.log(Products);
  return (
    <div
      style={{
        width: "100%",
      }}
    >
      <div className="container">
        <div className="productLists">
          {Products.map((item) => (
            <ProductCards key={item.id} product={item} onAdd={onAdd} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductList;
