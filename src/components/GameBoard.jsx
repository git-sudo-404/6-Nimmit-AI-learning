import React from "react";
import PlayerHand from "./PlayerHand";
import EnemyHand from "./EnemyHand";
import Arena from "./Arena";
import { createCard } from "../lib/utils.js";

const GameBoard = () => {
  let cards = [];

  for (let i = 1; i <= 104; i++) {
    let card = createCard();
    card.cardNumber = i;
    cards.push(card);
  }

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
          <PlayerHand cards={cards} />
        </div>
      </div>
    </>
  );
};

export default GameBoard;
