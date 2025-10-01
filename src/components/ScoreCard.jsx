import React from "react";

const ScoreCard = () => {
  return (
    <div className="w-full h-full">
      <div className="  ruonded-xl  w-full h-full grid grid-cols-2 gap-2">
        <div className="grid-span-1 rounded-xl border borded-white border-dashed bg-black/30"></div>
        <div className="grid-span-1 rounded-xl border border-black border-dashed bg-white/30"></div>
      </div>
    </div>
  );
};

export default ScoreCard;
