import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { useSearchParams } from "react-router-dom";

function Pagination({ from, to, currentPage, total, totalPages }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const currPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  function handleNextPage() {
    const next = totalPages === currPage ? currentPage : currentPage + 1;
    searchParams.set("page", next);
    setSearchParams(searchParams);
  }

  function handlePrevPage() {
    const prev = currPage === 1 ? currentPage : currentPage - 1;
    searchParams.set("page", prev);
    setSearchParams(searchParams);
  }

  return (
    <div className="flex justify-evenly h-24 items-center">
      <div>
        Products {from}-{to} Page {currPage} of {totalPages} pages
      </div>
      <div>
        <button onClick={handlePrevPage}>
          <HiChevronLeft />
        </button>
        <button onClick={handleNextPage}>
          <HiChevronRight />
        </button>
      </div>
    </div>
  );
}

export default Pagination;
