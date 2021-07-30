import ProductItems from "../product";
import products from "../product";

function Welcome() {
  return <div>Welcome React to our family! It's my first React project!</div>;
}

function Greeeting(props) {
  return <div>Greeting Component!</div>;
}

const PI = 3.14;

function myComponent(props) {
  return (
    <div>
      This is my component!!! <ProductItems />
    </div>
  );
}

export { Welcome, Greeeting, PI };
export default myComponent;
