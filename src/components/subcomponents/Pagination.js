import React from "react";

function Pagination({ p, total_p, updatePage, updateLimit }) {
  return (
    <>
      <button onClick={() => updatePage(-1)} disabled={p === 1}>
        Previous
      </button>
      {`${p} / ${total_p}`}
      <button onClick={() => updatePage(1)} disabled={p === total_p}>
        Next
      </button>
      <span>SHOW ME</span>

      <button onClick={() => updateLimit(1)}>1</button>
      <button onClick={() => updateLimit(2)}>2</button>
      <button onClick={() => updateLimit(5)}>5</button>
      <button onClick={() => updateLimit(10)}>10</button>
      <button onClick={() => updateLimit(100)}>ALL</button>
      <span>RESULTS PER PAGE</span>
    </>
  );
}

export default Pagination;
