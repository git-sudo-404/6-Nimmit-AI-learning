import React from "react";
import Card from "./Card.jsx";

const Row = ({ row, cards }) => {
  const emptyColsHolder = [0, 1, 2, 3, 4, 5];

  let currentRowCards = cards.filter((card) => card.rowNumber === row);

  currentRowCards.sort((cardA, cardB) => cardA.cardNumber < cardB.cardNumber);

  if (row == 0) console.log(cards);

  return (
    <div className=" bg-white/10  rounded-xl border border-white/01 backdrop-blur-xs shadow-lg w-full h-full my-auto ">
      <div className="col-span-6 w-full h-full grid grid-cols-6 gap-8 p-2  ">
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
  );
};

export default Row;
