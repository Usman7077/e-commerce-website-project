import { useSearchParams } from "react-router-dom";
import { PRODUCT_CATEGORY } from "../CONSTANTS/CONSTANTS";

const Sidebar = () => {
  const [searchParms, setSearchParams] = useSearchParams();
  const productCategory = Number(searchParms.get("productCategory"));
  function handleProductCat(value) {
    searchParms.set("productCategory", value);
    searchParms.set("page", 1);
    setSearchParams(searchParms);
  }
  return (
    <>
      <div className="flex items-center justify-center text-[#303030] text-lg min-w-[20%] max-h-[50vh] sticky top-20  ">
        <ul>
          <li
            onClick={() => handleProductCat(0)}
            className={
              "p-2 cursor-pointer hover:bg-[#8b9c927e] rounded-2xl " +
              (productCategory === 0 ? "text-[#1971c2]" : "")
            }
          >
            Desktop & All-in-One Computers
          </li>
          <li
            onClick={() => handleProductCat(1)}
            className={
              "p-2 cursor-pointer hover:bg-[#8b9c927e] rounded-2xl " +
              (productCategory === 1 ? "text-[#3cd355]" : "")
            }
          >
            Cell Phones
          </li>
          <li
            onClick={() => handleProductCat(2)}
            className={
              "p-2 cursor-pointer hover:bg-[#8b9c927e] rounded-2xl " +
              (productCategory === 2 ? "text-[#3cd355]" : "")
            }
          >
            Digital Cameras
          </li>
          <li
            onClick={() => handleProductCat(3)}
            className={
              "p-2 cursor-pointer hover:bg-[#8b9c927e] rounded-2xl " +
              (productCategory === 3 ? "text-[#3cd355]" : "")
            }
          >
            Headphones
          </li>
          <li
            onClick={() => handleProductCat(4)}
            className={
              "p-2 cursor-pointer hover:bg-[#8b9c927e] rounded-2xl " +
              (productCategory === 4 ? "text-[#3cd355]" : "")
            }
          >
            Home Audio
          </li>
          <li
            onClick={() => handleProductCat(5)}
            className={
              "p-2 cursor-pointer hover:bg-[#8b9c927e] rounded-2xl " +
              (productCategory === 5 ? "text-[#3cd355]" : "")
            }
          >
            Laptops
          </li>
        </ul>
      </div>
    </>
  );
};
export default Sidebar;
