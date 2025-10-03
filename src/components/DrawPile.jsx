import React from "react";
import Card from "./Card";
import ScoreCard from "./ScoreCard";

const DrawPile = ({ cards, setCards, gameStats, setGameStats }) => {
  let leftOverCards = cards.filter((card) => card.rowNumber === 6);

  return (
    <>
      <div className="bg-black/01 rounded-xl shadow-black/00   w-full h-full grid grid-rows-3 gap-2">
        <div className="row-span-2 backdrop-blur-xs bg-black/20  rounded-xl border-black/20 shadow-black w-full h-full">
          <div className="border border-dashed border-black w-full h-full rounded-2xl p-1">
            {/* DrawPile */}

            <div className="border border-black border-dashed w-full h-full rounded-xl p-1 flex justify-center items-center">
              <div className="h-75/100 w-60/100">
                {leftOverCards[0] ? (
                  <Card card={leftOverCards[0]} />
                ) : (
                  <div className="border border-red-400 border-dashed rounded-xl w-full h-full"></div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="row-span-2 backdrop-blur-xs bg-black/10 border border-black/10 rounded-xl shadow-black">
          {/* SCORES  */}

          <div className="border  border-black rounded-2xl w-full h-full p-1 ">
            <div className="border border-black  w-full h-full  rounded-xl p-3 ">
              <ScoreCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DrawPile;
