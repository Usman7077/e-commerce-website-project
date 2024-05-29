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
      <div className="max-w-96 max-h-96 m-7">
        <Link to={`/product/${pr.sku}`}>
          {" "}
          <img src={pr.image} className="object-scale-down h-48 w-96"></img>
        </Link>
        <p className="text-sm text-[#1e6ed7] hover:underline hover:text-[#1ed75c] cursor-pointer">
          {" "}
          {pr.name}
        </p>
        <div className="flex">
          <p className="mr-7 ">
            <b>Model: </b>
            {pr.modelNumber}{" "}
          </p>
          <p>
            <b> SKU: </b>
            {pr.sku}
          </p>
        </div>
        <p className="inline-block">
          <b>${pr.regularPrice}</b>
        </p>
        {pr.onSale && (
          <div className="bg-[#e04b58] text-white  w-12 text-center inline-block">
            Sale
          </div>
        )}
        {customerReviewAverage && (
          <StarRating
            defaultRating={customerReviewAverage}
            size={25}
            customerCount={pr.customerReviewCount}
          />
        )}
        {isInCart?.length !== 0 ? (
          <p>Go to Cart</p>
        ) : (
          <Button onClick={handleCart} type={"primary"}>
            Add to Cart
          </Button>
        )}
      </div>
    </>
  );
};
export default Cards;
