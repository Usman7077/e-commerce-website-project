import { useContext } from "react";
import { CartContext } from "../context/CartProvider";
import Button from "./Button";

function CartUpdate({ children }) {
  const { cart, setCart } = useContext(CartContext);

  return (
    <div className="inline-block">
      <div className="space-x-4 flex items-center">{children}</div>
    </div>
  );
}

function Increase({ sku }) {
  const { cart, setCart } = useContext(CartContext);
  function handleIncrease() {
    const updatedCart = cart.map((item) =>
      item.sku === sku ? { ...item, count: item.count + 1 } : item
    );
    // arr[0].count -= 1;
    setCart(updatedCart);
  }
  return (
    <Button type="small" onClick={handleIncrease}>
      +
    </Button>
  );
}

function Decrease({ sku }) {
  const { cart, setCart } = useContext(CartContext);
  function handleDecrease() {
    const updatedCart = cart.map((item) =>
      item.sku === sku ? { ...item, count: item.count - 1 } : item
    );
    const filterCart = updatedCart.filter((item) =>
      item.sku !== sku ? true : item.count !== 0 ? true : false
    );
    // arr[0].count -= 1;
    setCart(filterCart);
  }
  return (
    <Button type="small" onClick={handleDecrease}>
      -
    </Button>
  );
}

function Quantity({ count }) {
  return <span className="text-xl font-medium">{count}</span>;
}

function Label({ children }) {
  return <div>{children}</div>;
}

CartUpdate.Increase = Increase;
CartUpdate.Decrease = Decrease;
CartUpdate.Label = Label;
CartUpdate.Quantity = Quantity;

export default CartUpdate;
