import { useContext, useState } from "react";
import { CartContext } from "../context/CartProvider";
// import CartUpdate from "../ui/CartUpdate";
// import { NavLink } from "react-router-dom";
import Button from "../ui/Button";
import CartItem from "./CartItem";
// import { HiCursorClick } from "react-icons/hi";

// import { RiCloseLargeFill } from "react-icons/ri";
export default function Cart({ handleCart }) {
  const { cart, setCart } = useContext(CartContext);
  const [showTrash, setShowTrash] = useState("");
  console.log(cart);
  // function CartItem({ item }) {
  //   return (
  //     <li className=" p-4 gap-x-4 grid grid-cols-[8rem_1fr]" key={item.sku}>
  //       <div className="w-32 h-32 row-span-3">
  //         <img
  //           className="object-contain w-[100%] h-[100%]"
  //           src={item.mediumImage}
  //         />
  //       </div>
  //       <NavLink to={`/product/${item.sku}`} onClick={handleCart}>
  //         <p className="font-medium">{item.name}</p>
  //       </NavLink>
  //       <div className="flex justify-between text-2xl">
  //         <CartUpdate>
  //           <CartUpdate.Decrease sku={item.sku} />
  //           <CartUpdate.Quantity count={item.count} />
  //           <CartUpdate.Increase sku={item.sku} />
  //         </CartUpdate>
  //         <div className="">
  //           <span className="text-base">$</span>
  //           <span className="text-2xl">
  //             {Number(item.regularPrice * item.count)
  //               .toString()
  //               .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
  //           </span>
  //         </div>
  //         <div className=" inline-block h-8 w-8">
  //           <svg
  //             className="inline-block h-8 w-[100%]"
  //             xmlns="http://www.w3.org/2000/svg"
  //             x="0px"
  //             y="0px"
  //             width="100"
  //             height="100"
  //             viewBox="0 0 50 50"
  //             fill="gray"
  //             pointerEvents={HiCursorClick}
  //           >
  //             <path d="M 21 0 C 19.355469 0 18 1.355469 18 3 L 18 5 L 10.1875 5 C 10.0625 4.976563 9.9375 4.976563 9.8125 5 L 8 5 C 7.96875 5 7.9375 5 7.90625 5 C 7.355469 5.027344 6.925781 5.496094 6.953125 6.046875 C 6.980469 6.597656 7.449219 7.027344 8 7 L 9.09375 7 L 12.6875 47.5 C 12.8125 48.898438 14.003906 50 15.40625 50 L 34.59375 50 C 35.996094 50 37.1875 48.898438 37.3125 47.5 L 40.90625 7 L 42 7 C 42.359375 7.003906 42.695313 6.816406 42.878906 6.503906 C 43.058594 6.191406 43.058594 5.808594 42.878906 5.496094 C 42.695313 5.183594 42.359375 4.996094 42 5 L 32 5 L 32 3 C 32 1.355469 30.644531 0 29 0 Z M 21 2 L 29 2 C 29.5625 2 30 2.4375 30 3 L 30 5 L 20 5 L 20 3 C 20 2.4375 20.4375 2 21 2 Z M 11.09375 7 L 38.90625 7 L 35.3125 47.34375 C 35.28125 47.691406 34.910156 48 34.59375 48 L 15.40625 48 C 15.089844 48 14.71875 47.691406 14.6875 47.34375 Z M 18.90625 9.96875 C 18.863281 9.976563 18.820313 9.988281 18.78125 10 C 18.316406 10.105469 17.988281 10.523438 18 11 L 18 44 C 17.996094 44.359375 18.183594 44.695313 18.496094 44.878906 C 18.808594 45.058594 19.191406 45.058594 19.503906 44.878906 C 19.816406 44.695313 20.003906 44.359375 20 44 L 20 11 C 20.011719 10.710938 19.894531 10.433594 19.6875 10.238281 C 19.476563 10.039063 19.191406 9.941406 18.90625 9.96875 Z M 24.90625 9.96875 C 24.863281 9.976563 24.820313 9.988281 24.78125 10 C 24.316406 10.105469 23.988281 10.523438 24 11 L 24 44 C 23.996094 44.359375 24.183594 44.695313 24.496094 44.878906 C 24.808594 45.058594 25.191406 45.058594 25.503906 44.878906 C 25.816406 44.695313 26.003906 44.359375 26 44 L 26 11 C 26.011719 10.710938 25.894531 10.433594 25.6875 10.238281 C 25.476563 10.039063 25.191406 9.941406 24.90625 9.96875 Z M 30.90625 9.96875 C 30.863281 9.976563 30.820313 9.988281 30.78125 10 C 30.316406 10.105469 29.988281 10.523438 30 11 L 30 44 C 29.996094 44.359375 30.183594 44.695313 30.496094 44.878906 C 30.808594 45.058594 31.191406 45.058594 31.503906 44.878906 C 31.816406 44.695313 32.003906 44.359375 32 44 L 32 11 C 32.011719 10.710938 31.894531 10.433594 31.6875 10.238281 C 31.476563 10.039063 31.191406 9.941406 30.90625 9.96875 Z"></path>
  //           </svg>
  //         </div>
  //       </div>
  //     </li>
  //   );
  // }

  return (
    <>
      <div className="flex gap-3 items-center mb-8">
        <div className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            xmlSpace="preserve"
            aria-hidden="true"
            role="img"
            aria-label="Cart Icon"
            fill="black"
            height="26px"
            width="26px"
          >
            <path d="M9 22.5c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3zM9 18c-.83 0-1.5.67-1.5 1.5S8.17 21 9 21s1.5-.67 1.5-1.5S9.83 18 9 18zm10 4.5c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3zm0-4.5c-.83 0-1.5.67-1.5 1.5S18.17 21 19 21s1.5-.67 1.5-1.5S19.83 18 19 18z"></path>
            <path d="M18.75 18h-11c-1.24 0-2.25-1.01-2.25-2.25s1.01-2.25 2.25-2.25h11.2c.12 0 .22-.08.24-.2l1.28-5.78c.08-.37-.01-.76-.25-1.05S19.64 6 19.26 6H5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h14.26c.84 0 1.62.38 2.14 1.03.53.65.72 1.5.54 2.32l-1.28 5.78c-.18.81-.88 1.37-1.71 1.37H7.75c-.41 0-.75.34-.75.75s.34.75.75.75h11c.41 0 .75.34.75.75s-.34.75-.75.75z"></path>
            <path d="M7.25 15c-.34 0-.64-.23-.73-.57L3.9 3.95A1.25 1.25 0 0 0 2.69 3h-.94C1.34 3 1 2.66 1 2.25s.34-.75.75-.75h.94c1.26 0 2.36.86 2.67 2.08l2.62 10.49a.748.748 0 0 1-.73.93z"></path>
          </svg>
        </div>
        <h1 className="text-3xl font-[400]">Shoping Cart</h1>
        <div className="h-8 w-8 cursor-pointer ml-auto" onClick={handleCart}>
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

      {cart.length > 0 ? (
        <div className="h-[70vh]  overflow-auto mb-8">
          <ul className="h-[100%]">
            {cart.map((item) => (
              <CartItem item={item} key={item.key} handleCart={handleCart} />
            ))}
          </ul>
        </div>
      ) : (
        <h1>No Items Added yet</h1>
      )}

      {cart.length > 0 && (
        <div>
          <div className="flex justify-around border-t-2 border-gray-300">
            <div className="text-3xl font-semibold mt-4">
              Total Price: <span className="text-base ml-4">$</span>
              <span className="text-4xl">
                {Number(
                  cart.reduce(
                    (acc, curr) => acc + curr.regularPrice * curr.count,
                    0
                  )
                )
                  .toFixed(2)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </span>
            </div>
          </div>
          <div className="flex justify-center">
            <Button>Check Out</Button>
          </div>
        </div>
      )}
    </>
  );
}
