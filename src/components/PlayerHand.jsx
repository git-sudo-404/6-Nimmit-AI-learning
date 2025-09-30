import React from "react";

const PlayerHand = ({ cards }) => {
  let curPlayerCards = cards.filter((card) => card.cardNumber === 5);

  const emptyCardHolder = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <>
      <div className=" grid grid-cols-13 gap-1 ml-2.5 mt-0.5 h-19/20 w-69/70 backdrop-blur-sm flex justify-center items-center rounded-xl bg-black/10 border-black/20 border-2 shadow-lg shadow-black/30">
        <div className="col-span-3 grid grid-cols-3 w-full h-full gap-2">
          <div className="col-span-1 border border-dashed border-white w-full h-full rounded-xl"></div>
          <div className="col-span-2   w-full h-full rounded-xl text-center  border border-blue-700 border-dashed">
            SELECT / WAIT
          </div>
        </div>
        <div className="col-span-10 grid grid-cols-10 gap-1 w-full h-full">
          {emptyCardHolder.map((card) => (
            <div
              key={card}
              className="border border-dashed border-white w-full h-full rounded-xl"
            ></div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PlayerHand;
