import React from "react";
import Card from "./Card.jsx";

const Row = ({ row, cards }) => {
  const emptyColsHolder = [0, 1, 2, 3, 4, 5];

  // console.log("From row", cards);

  let currentRowCards = cards.filter((card) => card.rowNumber === row);

  return (
    <div className=" bg-white/10  rounded-xl border border-white/01 backdrop-blur-xs shadow-lg w-97/100 h-full my-auto ">
      <div className="grid grid-cols-9  w-full h-full gap-1 p-1">
        <div className="col-span-2 w-full h-full">
          <div className="border border-white border-dashed rounded-xl h-full w-full"></div>
        </div>
        <div className="col-span-1"></div>
        <div className="col-span-6 w-full h-full grid grid-cols-6 gap-8  ">
          {emptyColsHolder.map((col) =>
            currentRowCards[col] ? (
              <Card key={col} card={currentRowCards[col]} />
            ) : (
              <div
                key={col}
                className="border border-black border-dashed w-full h-full rounded-xl"
              ></div>
            ),
          )}
        </div>
      </div>
    </div>
  );
};

export default Row;
