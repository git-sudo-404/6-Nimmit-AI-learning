import React from "react";

const DrawPile = () => {
  return (
    <>
      <div className="bg-black/01 rounded-xl shadow-black/00   w-full h-full grid grid-rows-3 gap-2">
        <div className="row-span-2 backdrop-blur-xs bg-black/20  rounded-xl border-black shadow-black">
          Pile
        </div>
        <div className="row-span-2 backdrop-blur-xs bg-black/10 border border-black/10 rounded-xl shadow-black">
          Score
        </div>
      </div>
    </>
  );
};

export default DrawPile;
