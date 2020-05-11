import React from "react";

function Pagination({ p, total_p, limit, updatePage, updateLimit }) {
  return (
    <div className="pagination__container">
      <div>
        <button onClick={() => updatePage(-1)} disabled={p === 1}>
          Previous
        </button>
        {`${p} / ${total_p}`}
        <button onClick={() => updatePage(1)} disabled={p === total_p}>
          Next
        </button>
      </div>
      <div>
        showing
        <button
          onClick={() => updateLimit(1)}
          name={1}
          className={limit === 1 ? "selected" : "normal"}
        >
          1
        </button>
        <button
          onClick={() => updateLimit(2)}
          name={2}
          className={limit === 2 ? "selected" : "normal"}
        >
          2
        </button>
        <button
          onClick={() => updateLimit(5)}
          name={5}
          className={limit === 5 ? "selected" : "normal"}
        >
          5
        </button>
        <button
          onClick={() => updateLimit(10)}
          name={10}
          className={limit === 10 ? "selected" : "normal"}
        >
          10
        </button>
        <button
          onClick={() => updateLimit(100)}
          name={100}
          className={limit === 100 ? "selected" : "normal"}
        >
          ALL
        </button>
      </div>
    </div>
  );
}

export default Pagination;
