import React from "react";

const Pagination = ({
  goPrev,
  goNext,
  itemPerPage,
  totalItem,
  currentPage,
}) => {
  const isPrevPageAvalible = currentPage == 0;

  const isNextPageAvalible = () => {
    const lastPageNumber = Math.floor(totalItem / itemPerPage);
    return lastPageNumber == currentPage;
  };

  return (
    <div className="pagination">
      <button className="btn" onClick={goPrev} disabled={isPrevPageAvalible}>
        {!isPrevPageAvalible && "←"}
      </button>
      <span className="pagination__page">{currentPage + 1}</span>
      <button className="btn" onClick={goNext} disabled={isNextPageAvalible()}>
        {!isNextPageAvalible() && "→"}
      </button>
    </div>
  );
};

export default Pagination;
