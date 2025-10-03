import React from "react";
import Card from "./Card.jsx";
import { useDroppable } from "@dnd-kit/core";
import RowCardHolder from "./RowCardHolder.jsx";

const Row = ({ row, cards }) => {
  const emptyColsHolder = [0, 1, 2, 3, 4, 5];

  let currentRowCards = cards.filter((card) => card.rowNumber === row);

  currentRowCards.sort((cardA, cardB) => cardA.cardNumber - cardB.cardNumber);

  let emptyCardsLength = 6 - currentRowCards.length;

  const emptyRowCards = Array.from({ length: emptyCardsLength });

  const { isOver, setNodeRef } = useDroppable({
    id: `drop-row-${row}`,
  });

  const style = {
    transform: isOver ? "scale(1.10)" : "scale(1.04)",
  };

  return (
    <div
      style={style}
      className=" bg-white/10  rounded-xl border border-white/01 backdrop-blur-xs shadow-lg w-full h-100/100 my-auto "
      ref={setNodeRef}
    >
      <div className="col-span-6 w-93/100 h-95/100 grid grid-cols-6 gap-8 p-2  ">
        {currentRowCards.map((card, idx) => (
          <Card key={card.cardNumber} card={card} />
        ))}
        {emptyRowCards.map((_, idx) => (
          <RowCardHolder key={idx} />
        ))}
      </div>
    </div>
  );
};

export default Row;
