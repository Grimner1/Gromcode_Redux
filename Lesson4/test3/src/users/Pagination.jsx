import React from "react";

const Pagination = ({
  goPrev,
  goNext,
  itemsPerPage,
  totalItems,
  currentPage,
}) => {
  // const isPrevPageAvailable = currentPage == 0;

  const isPrevPageAvailable = currentPage > 0;
  const isNextPageAvailable =
    currentPage < Math.ceil(totalItems / itemsPerPage) - 1;

  // const lastPageNumber = Math.floor(totalItems / itemsPerPage);

  // const isNextPageAvailable = lastPageNumber == currentPage;

  return (
    <div className="pagination">
      <button className="btn" onClick={goPrev} disabled={!isPrevPageAvailable}>
        {isPrevPageAvailable && "←"}
      </button>
      <span className="pagination__page">{currentPage + 1}</span>
      <button className="btn" onClick={goNext} disabled={!isNextPageAvailable}>
        {isNextPageAvailable && "→"}
      </button>
    </div>
  );
};

export default Pagination;
