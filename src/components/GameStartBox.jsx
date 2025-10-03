import React from "react";

const GameStartBox = () => {
  return (
    <div className="h-60 w-100 absolute top-90 left-140 backdrop-blur-2xl rounded-3xl z-[1000]">
      <div className="border p-1 border-black border-dashed rounded-2xl w-full h-full bg-black/10 ">
        <div className=" border border-black border-dashed rounded-2xl w-full h-full bg-white/10 flex justify-center items-center">
          <div className="h-full w-full grid grid-row-2 gap-4 p-2">
            <div className="row-span-1 w-full h-full flex justify-center items-center">
              <div className="w-80/100 h-50/100 flex items-center justify-center rounded-xl border border-black border-dashed">
                <h2 className="text-md font-mono text-black ">
                  Would You Like to Test Audio?
                </h2>
              </div>
            </div>
            <div className="row-span-1 flex justify-center items-center">
              <div className="grid grid-cols-2 gap-5">
                <div className="col-span-1">
                  <button className="border border-dashed text-black border-black rounded-xl p-3 shadow-xl shadow-black/40 hover:scale-125 transform-all duration-100 ">
                    Test Audio
                  </button>
                </div>
                <div className="col-span-1">
                  <button className="border border-dashed text-black border-black rounded-xl p-3 shadow-xl shadow-black/40 hover:scale-125 transform-all duration-100  ">
                    Start Game
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameStartBox;
