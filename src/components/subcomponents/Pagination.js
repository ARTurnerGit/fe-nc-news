import React from "react";

function Pagination({ p, total_p, updatePage, updateLimit }) {
  return (
    <>
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
        <button onClick={() => updateLimit(1)}>1</button>
        <button onClick={() => updateLimit(2)}>2</button>
        <button onClick={() => updateLimit(5)}>5</button>
        <button onClick={() => updateLimit(10)}>10</button>
        <button onClick={() => updateLimit(100)}>ALL</button>
      </div>
    </>
  );
}

export default Pagination;
