import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PRODUCT_API } from "../CONSTANTS/CONSTANTS";

const Product = () => {
  const pram = useParams();
  const { sku } = pram;
  const [product, setProduct] = useState();
  const [currImg, setCurrImg] = useState(0);
  const [trans, setTrans] = useState("");

  useEffect(() => {
    function getProduct() {
      fetch(PRODUCT_API(sku))
        .then((res) => res.json())
        .then((res) => {
          setProduct(res);
          console.log(res);
        });
    }
    getProduct();
  }, [sku]);

  function handleImgClick(i) {
    setCurrImg(i);
    setTrans(`translate-x-${i}`);
  }

  const divStyle = {
    transform: `translate(-${currImg * 6}rem)`,
  };
  return (
    <div className="p-8 max-w-screen-xl mx-auto border-solid border-sky-100 border-2 grid grid-cols-2">
      <div>
        <div className="w-[35rem]  flex items-center justify-center mb-8">
          <img
            src={product?.products[0]?.images[currImg].href}
            className="w-full h-[30rem] object-contain"
          ></img>
        </div>

        <div className={"w-[35rem]  relative overflow-hidden"}>
          <div
            className={" flex gap-4 mb-8 transition-all duration-300 "}
            style={divStyle}
          >
            {product?.products[0]?.images.map((image, i) => (
              <div
                key={image.href}
                onClick={() => handleImgClick(i)}
                className="h-[6rem] w-[6rem] p-2 shrink-0 cursor-pointer border-solid border-2 "
              >
                <img
                  src={image.href}
                  className=" object-contain h-[100%] w-[100%]"
                ></img>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-xl font-bold">{product?.products[0]?.name}</h1>
        <p>{product?.products[0]?.longDescription}</p>
      </div>
    </div>
  );
};

export default Product;
