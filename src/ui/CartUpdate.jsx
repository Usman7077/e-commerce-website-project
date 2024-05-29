import { useContext } from "react";
import { CartContext } from "../context/CartProvider";
import Button from "./Button";

function CartUpdate({ children }) {
  const { cart, setCart } = useContext(CartContext);

  return <div>{children}</div>;
}

function Increase({ sku }) {
  const { cart, setCart } = useContext(CartContext);
  function handleIncrease() {
    const arr = cart.map((arr) =>
      arr.sku === sku ? { ...arr, count: arr.count + 1 } : arr
    );
    // arr[0].count -= 1;
    setCart(arr);
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
    const arr = cart.map((arr) =>
      arr.sku === sku ? { ...arr, count: arr.count - 1 } : arr
    );
    // arr[0].count -= 1;
    setCart(arr);
  }
  return (
    <Button type="small" onClick={handleDecrease}>
      -
    </Button>
  );
}

function Quantity({ count }) {
  return <span>{count}</span>;
}

function Label({ children }) {
  return <div>{children}</div>;
}

CartUpdate.Increase = Increase;
CartUpdate.Decrease = Decrease;
CartUpdate.Label = Label;
CartUpdate.Quantity = Quantity;

export default CartUpdate;
