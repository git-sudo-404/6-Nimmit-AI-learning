import React from "react";
import Card from "./Card";

const PlayerHand = ({ cards }) => {
  let curPlayerCards = cards.filter((card) => card.cardNumber === 5);

  const emptyCardHolder = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  let playerCards = cards.filter((card) => card.rowNumber === 5);

  console.log(playerCards[0]);

  return (
    <>
      <div className=" bg-black/01 p-1 px-1.5 grid grid-cols-12 gap-1 ml-2.5 mt-0.5 h-19/20 w-69/70 backdrop-blur-sm  justify-center items-center rounded-xl  border-black/20 border-2 shadow-lg shadow-black/30 ">
        <div className="col-span-2 grid grid-cols-2 w-full h-full gap-2">
          <div className="col-span-1 border border-dashed border-white w-95/100 h-95/100 rounded-xl"></div>
          <div className="col-span-1   w-full h-full rounded-xl text-center  border-blue-700 border-dashed"></div>
        </div>
        <div className="col-span-10 w-full h-full grid grid-cols-10 gap-4">
          {emptyCardHolder.map((cardInd) => (
            <div key={cardInd} className="col-span-1 w-95/100 h-95/100">
              {playerCards[cardInd] ? (
                <Card card={playerCards[cardInd]} />
              ) : (
                <div className="border border-white w-full h-full border-dashed rounded-xl"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PlayerHand;
