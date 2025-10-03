import React from "react";

const AlgoSelector = () => {
  return (
    <div className="grid grid-rows-9 gap-2 p-4 w-full h-full font-mono">
      <div className="row-span-1 border border-white border-dashed w-full h-full rounded-xl flex justify-center items-center bg-black/70  hover:bg-black hover:border-white hover:text-xl transition-all">
        Choose Your Algo
      </div>
      <div className="row-span-2 w-full h-full border border-dashed rounded-2xl bg-blue-900/40 border-blue-900 flex items-center justify-center hover:bg-blue-900 hover:border-white hover:text-xl transition-all">
        Expectiminimax
      </div>
      <div className="row-span-2 w-full h-full border border-dashed rounded-2xl bg-green-900/40 border-green-900 flex items-center justify-center  pl-5 hover:bg-green-900 hover:border-white hover:text-xl transition-all">
        MCTS (Monte-Carlo Tree Search)
      </div>
      <div className="row-span-2 w-full h-full border border-dashed rounded-2xl bg-yellow-900/40 border-yellow-900 flex items-center justify-center pl-5 hover:bg-yellow-900 hover:border-white hover:text-xl transition-all">
        Reinforcement Learning
      </div>
      <div className="row-span-2 w-full h-full border border-dashed rounded-2xl bg-red-900/40 border-red-900 flex items-center justify-center hover:bg-red-900 hover:border-white hover:text-xl transition-all">
        Neural Networks
      </div>
    </div>
  );
};

export default AlgoSelector;
