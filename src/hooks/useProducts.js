import { useQuery } from "@tanstack/react-query";
import { BEST_BUY_API, PRODUCT_CATEGORY } from "../CONSTANTS/CONSTANTS";
import { useSearchParams } from "react-router-dom";

export function useProducts() {
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page") || 1;
  const productCategory = searchParams.get("productCategory") || 0;

  async function getCategoryProducts({ productCategory, page }) {
    const res = await fetch(
      BEST_BUY_API(PRODUCT_CATEGORY[productCategory], page)
    );
    const data = await res.json();
    console.log(data);
    return data;
  }

  //   useEffect(() => {
  //     setApi([]);
  //     getCategoryProducts(productCategory);
  //     sessionStorage.setItem("prodCat", productCategory);
  //   }, [productCategory]);

  //React-query

  const { isLoading, data, error } = useQuery({
    queryKey: ["products", productCategory, page],
    queryFn: () => getCategoryProducts({ productCategory, page }),
  });

  return { isLoading, data, error };
}

export default useProducts;
