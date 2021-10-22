import React from "react";
import { Products } from "../data/Data";
import { curr } from "../service/currencyService";

function Cart({ cartItem, onAdd, onMin }) {
  let itemPrices = cartItem.reduce((a, c) => a + c.price * c.quantity, 0); // total price of the item
  return (
    <div className="shoppingCart">
      <div className="introCart">
        <h1>Your cart</h1>
        <hr
          style={{ color: "black", border: "2px solid black", width: "70%" }}
        />
      </div>
      <div className="lists">
        <div>{cartItem.length === 0 && <h1>Your card is empty.</h1>}</div>
        {cartItem.map((item) => (
          <div className="cartControl">
            <div className="cartIMG">
              <img src={item.img} />
            </div>
            <div className="cartName">
              <h1>{item.name}</h1>
              <p>{item.description}</p>
            </div>
            <div className="btn">
              <button onClick={() => onAdd(item)}>+</button>
              <button onClick={() => onMin(item)}>-</button>
            </div>
            <div>
              <h1>Price: {item.price}</h1>
              <h1>Quantity: {item.quantity}</h1>
            </div>
          </div>
        ))}
        {/* <h1>Your cart is empty.</h1> */}
      </div>
      <div className="summary">
        <hr
          style={{ color: "black", border: "2px solid black", width: "70%" }}
        />
        <h1>Total price: {curr(itemPrices)}</h1>
        <button>Checkout</button>
      </div>
    </div>
  );
}

export default Cart;
