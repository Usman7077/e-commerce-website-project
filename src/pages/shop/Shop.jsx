import { useState } from "react";
import Cards from "../../ui/Cards.jsx";
import Sidebar from "../../ui/Sidebar.jsx";
import Shimmer from "../../ui/Shimmer.jsx";
import Pagination from "../../ui/Pagination.jsx";
import useProducts from "../../hooks/useProducts.js";
import { useSearchParams } from "react-router-dom";

const Content = () => {
  const initialVal = Number(sessionStorage.getItem("prodCat")) || 0;

  //   const [api, setApi] = useState([]);
  const [productCategory, setProductCategory] = useState(initialVal);
  const { data, isLoading, error } = useProducts(productCategory);

  return (
    <>
      <div className="flex relative z-10">
        <Sidebar />
        <div>
          <div className="flex flex-wrap min-w-[80%] border-l-[1px] shadow-lg">
            {isLoading ? (
              <Shimmer />
            ) : (
              data.products.map((pr) => <Cards pr={pr} key={pr.sku} {...pr} />)
            )}
          </div>

          {!isLoading && (
            <Pagination
              from={data.from}
              to={data.to}
              currentPage={data.currentPage}
              total={data.total}
              totalPages={data.totalPages}
            />
          )}
        </div>
      </div>
    </>
  );
};
export default Content;
