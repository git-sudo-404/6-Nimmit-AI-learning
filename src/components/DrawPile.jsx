import React from "react";

const DrawPile = () => {
  return (
    <>
      <div className="bg-black/01 rounded-xl shadow-black/00   w-full h-full grid grid-rows-3 gap-2">
        <div className="row-span-2 backdrop-blur-xs bg-black/20  rounded-xl border-black/20 shadow-black w-full h-full">
          <div className="border border-dashed border-black w-full h-full rounded-2xl p-1">
            <div className="border border-black border-dashed w-full h-full rounded-xl"></div>
          </div>
        </div>
        <div className="row-span-2 backdrop-blur-xs bg-black/10 border border-black/10 rounded-xl shadow-black">
          <div className="border  border-black rounded-2xl w-full h-full p-1 ">
            <div className="border border-black  w-full h-full  rounded-xl grid grid-rows-5 gap-2 p-2"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DrawPile;
