import React from "react";

function Pagination({ p, total_p, updatePage }) {
  return (
    <>
      <button onClick={() => updatePage(-1)}>Previous</button>
      {`${p} / ${total_p}`}
      <button onClick={() => updatePage(1)}>Next</button>
    </>
  );
}

export default Pagination;
