import React from "react";

interface propsType {
  postPerPage: number;
  totalPost: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  currentPage: number;
}

function Paginate({
  postPerPage,
  totalPost,
  setCurrentPage,
  currentPage,
}: propsType) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
    pageNumbers.push(i);
  }

  const pagination = (num: number) => {
    setCurrentPage(num);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <button
        style={{ cursor: "pointer" }}
        disabled={currentPage === 1}
        onClick={() => setCurrentPage((prev) => prev - 1)}
      >
        ◀
      </button>
      {pageNumbers.map((number) => (
        <span
          onClick={() => pagination(number)}
          style={{
            cursor: "pointer",
            padding: ".5rem",
            border: "1px solid blue",
            margin: ".2rem",
          }}
          key={number}
        >
          {number}
        </span>
      ))}
      <button
        style={{ cursor: "pointer" }}
        disabled={currentPage === pageNumbers.length}
        onClick={() => setCurrentPage((prev) => prev + 1)}
      >
        ▶
      </button>
    </div>
  );
}

export default Paginate;
