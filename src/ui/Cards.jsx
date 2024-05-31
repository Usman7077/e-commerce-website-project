import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartProvider";
import CartUpdate from "./CartUpdate";
import Button from "./Button";
import StarRating from "./StarRating";

const Cards = ({ pr, customerReviewAverage }) => {
  const { cart, setCart } = useContext(CartContext);
  const [isInCart, setIsInCart] = useState([]);

  useEffect(
    function () {
      setIsInCart([
        ...cart.filter((element) => Number(element.sku) == Number(pr.sku)),
      ]);
    },
    [pr.sku, cart]
  );

  function handleCart() {
    setCart((prev) => [...prev, { ...pr, count: 1 }]);
  }
  return (
    <>
      <div className="flex flex-col justify-between gap-2 max-w-[17rem] max-h-[400px] p-4 relative ">
        <Link to={`/product/${pr.sku}`}>
          <img src={pr.image} className="object-scale-down h-48 w-96" />
        </Link>
        <p className="text-sm text-[#1e6ed7] hover:underline hover:text-[#1ed75c] cursor-pointer mt-4 ">
          {pr.name}
        </p>
        {customerReviewAverage && (
          <StarRating
            defaultRating={customerReviewAverage}
            size={25}
            customerCount={pr.customerReviewCount}
          />
        )}

        <div className="flex justify-between">
          <div className="text-2xl font-base inline-block">
            <span className="text-sm">$</span>
            {pr.regularPrice}
          </div>
          <div className=" inline-block">
            {isInCart?.length !== 0 ? (
              <Button bgColor="#8a1542">Go to Cart</Button>
            ) : (
              <Button onClick={handleCart} type={"primary"}>
                Add to Cart
              </Button>
            )}
          </div>
        </div>

        {pr.onSale && (
          <div className="bg-[#e03131] text-white  w-12 text-center inline-block absolute tracking-wider font-semibold left-8 ">
            Sale
          </div>
        )}
      </div>
    </>
  );
};
export default Cards;
