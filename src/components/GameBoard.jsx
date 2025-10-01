import React from "react";
import PlayerHand from "./PlayerHand";
import EnemyHand from "./EnemyHand";
import Arena from "./Arena";
import { createCard } from "../lib/utils.js";

const GameBoard = () => {
  let cards = [];

  for (let i = 1; i <= 30; i++) {
    let card = createCard();
    card.cardNumber = i;
    card.rowNumber = i % 7;
    card.colNumber = i % 7;
    cards.push(card);
  }

  return (
    <>
      <div className="grid grid-rows-12 h-screen w-screen">
        <div className="row-span-2 ">
          <EnemyHand cards={cards} />
        </div>
        <div className="row-span-8 ">
          <Arena cards={cards} />
        </div>
        <div className="row-span-2 ">
          <PlayerHand cards={cards} />
        </div>
      </div>
    </>
  );
};

export default GameBoard;
