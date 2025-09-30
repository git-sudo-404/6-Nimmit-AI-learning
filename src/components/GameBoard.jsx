import React from "react";
import PlayerHand from "./PlayerHand";
import EnemyHand from "./EnemyHand";
import Arena from "./Arena";

const GameBoard = () => {
  return (
    <>
      <div className="grid grid-rows-12 h-screen w-screen">
        <div className="row-span-2 ">
          <EnemyHand />
        </div>
        <div className="row-span-8 ">
          <Arena />
        </div>
        <div className="row-span-2 ">
          <PlayerHand />
        </div>
      </div>
    </>
  );
};

export default GameBoard;
