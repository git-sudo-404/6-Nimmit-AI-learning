import React from "react";
import DrawPile from "./DrawPile";
import Rows from "./Rows";
import AlgoSelector from "./AlgoSelector";

const Arena = ({ cards, setCards, gameStats, setGameStats }) => {
  return (
    <>
      <div className="col-span-12  grid grid-cols-11 h-full w-full rounded-xl  shadow-black gap-4 px-12 pb-2 mt-2.5 ">
        <div className="col-span-3  bg-black/02 rounded-l-xl shadow-black/30 flex items-center justify-center">
          <DrawPile
            cards={cards}
            setCards={setCards}
            gameStats={gameStats}
            setGameStats={setGameStats}
          />
        </div>
        <div className="col-span-6 bg-black/01  rounded-r-xl shadow-black/10 flex flex-col justify-evenly ">
          <Rows cards={cards} />
        </div>
        <div className="col-span-2 w-full h-full shadow-black/30 shadow-lg   backdrop-blur-xl bg-black/10 rounded-3xl">
          <AlgoSelector />
        </div>
      </div>
    </>
  );
};

export default Arena;
