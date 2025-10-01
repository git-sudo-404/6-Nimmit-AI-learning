import React from "react";
import Row from "./Row";
import DrawPile from "./DrawPile";
import Rows from "./Rows";

const Arena = ({ cards }) => {
  const rows = [1, 2, 3, 4];

  return (
    <>
      <div className="ml-2.5 mt-3.5 grid grid-cols-8 h-29/30 w-69/70 rounded-xl  shadow-black/01 ">
        <div className="col-span-2  bg-black/02 rounded-l-xl shadow-black/30 flex items-center justify-center">
          <DrawPile cards={cards} />
        </div>
        <div className="col-span-6 bg-black/01  rounded-r-xl shadow-black/10 flex flex-col justify-evenly ">
          <Rows cards={cards} />
        </div>
      </div>
    </>
  );
};

export default Arena;
