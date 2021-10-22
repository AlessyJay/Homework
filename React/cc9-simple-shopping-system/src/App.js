import "./style/style.css";
import { useState } from "react";
import Header from "./components/Header.jsx";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import { Products } from "./data/Data";

function App() {
  const [cartItem, setCartItem] = useState([]);

  const onAdd = (product) => {
    // alert(`Add to cart!`);
    // console.log(`ID: ${product.id}, Name: ${product.name}`);
    const idx = cartItem.findIndex((x) => x.id === product.id); // find the id of the product first.
    const newCart = [...cartItem]; // clone the product
    // newCart.push({ ...product });
    if (idx > -1) {
      newCart[idx] = { ...newCart[idx], quantity: newCart[idx].quantity + 1 }; // if user click the same product, then let it stacks up.
    } else {
      newCart.push({ ...product, quantity: 1 });
    }
    setCartItem(newCart);
  };
  const onMin = (product) => {
    const exist = cartItem.find((item) => item.id === product.id);
    if (exist.quantity === 1) {
      setCartItem(cartItem.filter((item) => item.id !== product.id));
    } else {
      setCartItem(
        cartItem.map((item) =>
          item.id === product.id
            ? { ...exist, quantity: exist.quantity - 1 }
            : item
        )
      );
    }
  };
  return (
    <div className="App">
      <div className="container">
        <div className="col-1">
          <Header countCard={cartItem.length} />
        </div>
        <div className="product col-2">
          <ProductList Products={Products} onAdd={onAdd} />
        </div>
        <div className="total">
          <Cart onAdd={onAdd} cartItem={cartItem} onMin={onMin} />
        </div>
      </div>
    </div>
  );
}

export default App;
