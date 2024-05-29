import { useContext } from "react";
import { CartContext } from "../context/CartProvider";
import CartUpdate from "../ui/CartUpdate";
import { NavLink } from "react-router-dom";
// import { RiCloseLargeFill } from "react-icons/ri";

function Cart({ handleCart }) {
  const { cart, setCart } = useContext(CartContext);
  console.log(cart);
  return (
    <>
      <div className="flex justify-around font-semibold bg-yellow-50">
        <h1>Shoping Cart</h1>
        <div className="h-8 w-8 cursor-pointer" onClick={handleCart}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlSpace="preserve"
            viewBox="0 0 24 24"
            aria-hidden="true"
            role="img"
            className="c-close-icon-svg fill v-text-tech-black"
          >
            <path d="M4.75 20c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l14.5-14.5c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-14.5 14.5c-.15.15-.34.22-.53.22"></path>
            <path d="M19.25 20c-.19 0-.38-.07-.53-.22L4.22 5.28c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l14.5 14.5c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22"></path>
          </svg>
        </div>
      </div>

      <div className="h-[60vh]  border-solid border-2 border-sky-500 max-h-96 overflow-auto bg-slate-400">
        <ul className="h-[100%]">
          {cart.map((item) => (
            <li className=" p-4 flex gap-7" key={item.sku}>
              <div>
                <img src={item.thumbnailImage} />
              </div>
              <NavLink to={`/product/${item.sku}`} onClick={handleCart}>
                <p>{item.sku}</p>
              </NavLink>
              <CartUpdate>
                <CartUpdate.Decrease sku={item.sku} />
                <CartUpdate.Quantity count={item.count} />
                <CartUpdate.Increase sku={item.sku} />
              </CartUpdate>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Cart;
