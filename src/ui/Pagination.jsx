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

  function goToPage(page) {
    searchParams.set("page", page);
    setSearchParams(searchParams);
  }

  return (
    <>
      <div className="flex justify-between mt-16">
        <button onClick={handlePrevPage}>
          Prev Page
          <HiChevronLeft />
        </button>
        {totalPages < 11
          ? Array.from({ length: totalPages }, (_, i) => (
              <button key={i} onClick={() => goToPage(i + 1)}>
                {i + 1}
              </button>
            ))
          : Array.from({ length: totalPages }, (_, i) => (
              <>
                {currPage < 8 && i < 8 && (
                  <button key={i} onClick={() => goToPage(i + 1)}>
                    {i + 1}
                  </button>
                )}

                {currPage < 8 && i === 8 && (
                  <button key={i} onClick={() => goToPage(i + 1)}>
                    ...
                  </button>
                )}

                {currPage < 8 && i + 1 === totalPages && (
                  <button key={i} onClick={() => goToPage(totalPages)}>
                    {totalPages}
                  </button>
                )}

                {currPage > 7 && i === 0 && (
                  <button key={i} onClick={() => goToPage(i + 1)}>
                    {i + 1}
                  </button>
                )}

                {currPage > 7 &&
                  i === 1 &&
                  (currPage >= totalPages - 5 ? (
                    <button key={i} onClick={() => goToPage(totalPages - 9)}>
                      ...
                    </button>
                  ) : (
                    <button key={i} onClick={() => goToPage(i + 1)}>
                      ...
                    </button>
                  ))}

                {currPage > 7 &&
                  i === 2 &&
                  (currPage >= totalPages - 5 ? (
                    <button key={i} onClick={() => goToPage(totalPages - 8)}>
                      {totalPages - 8}
                    </button>
                  ) : (
                    <button key={i} onClick={() => goToPage(currPage - 3)}>
                      {currPage - 3}
                    </button>
                  ))}

                {currPage > 7 &&
                  i === 3 &&
                  (currPage >= totalPages - 5 ? (
                    <button key={i} onClick={() => goToPage(totalPages - 7)}>
                      {totalPages - 7}
                    </button>
                  ) : (
                    <button key={i} onClick={() => goToPage(currPage - 2)}>
                      {currPage - 2}
                    </button>
                  ))}

                {currPage > 7 &&
                  i === 4 &&
                  (currPage >= totalPages - 5 ? (
                    <button key={i} onClick={() => goToPage(totalPages - 6)}>
                      {totalPages - 6}
                    </button>
                  ) : (
                    <button key={i} onClick={() => goToPage(currPage - 1)}>
                      {currPage - 1}
                    </button>
                  ))}

                {currPage > 7 &&
                  i === 5 &&
                  (currPage >= totalPages - 5 ? (
                    <button key={i} onClick={() => goToPage(totalPages - 5)}>
                      {totalPages - 5}
                    </button>
                  ) : (
                    <button key={i} onClick={() => goToPage(currPage)}>
                      {currPage}
                    </button>
                  ))}

                {currPage > 7 &&
                  i === 6 &&
                  (currPage >= totalPages - 5 ? (
                    <button key={i} onClick={() => goToPage(totalPages - 4)}>
                      {totalPages - 4}
                    </button>
                  ) : (
                    <button key={i} onClick={() => goToPage(currPage + 1)}>
                      {currPage + 1}
                    </button>
                  ))}

                {currPage > 7 &&
                  i === 7 &&
                  (currPage >= totalPages - 5 ? (
                    <button key={i} onClick={() => goToPage(totalPages - 3)}>
                      {totalPages - 3}
                    </button>
                  ) : (
                    <button key={i} onClick={() => goToPage(currPage + 2)}>
                      {currPage + 2}
                    </button>
                  ))}

                {currPage > 7 &&
                  i === 8 &&
                  (currPage >= totalPages - 5 ? (
                    <button key={i} onClick={() => goToPage(totalPages - 2)}>
                      {totalPages - 2}
                    </button>
                  ) : (
                    <button key={i} onClick={() => goToPage(currPage + 3)}>
                      {currPage + 3}
                    </button>
                  ))}

                {currPage > 7 &&
                  i === 9 &&
                  (currPage >= totalPages - 5 ? (
                    <button key={i} onClick={() => goToPage(totalPages - 1)}>
                      {totalPages - 1}
                    </button>
                  ) : (
                    <button key={i} onClick={() => goToPage(currPage + 4)}>
                      ...
                    </button>
                  ))}

                {currPage > 7 && i + 1 === totalPages && (
                  <button key={i} onClick={() => goToPage(totalPages)}>
                    {totalPages}
                  </button>
                )}
              </>
            ))}
        <button onClick={handleNextPage}>
          Next Page
          <HiChevronRight />
        </button>
      </div>
    </>
  );
}

export default Pagination;
