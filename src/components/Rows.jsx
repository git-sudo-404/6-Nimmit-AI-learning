import React from "react";
import Row from "./Row";

const Rows = ({ cards }) => {
  const rows = [1, 2, 3, 4];

  return (
    <>
      <div className=" grid grid-rows-4 w-69/70 h-full m-auto rounded-xl gap-1 bg-black/01  ">
        {rows.map((row) => (
          <Row key={row} row={row} cards={cards} />
        ))}
      </div>
    </>
  );
};

export default Rows;
