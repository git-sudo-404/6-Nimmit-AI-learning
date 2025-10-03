import React, { useEffect } from "react";
import PlayerHand from "./PlayerHand";
import EnemyHand from "./EnemyHand";
import Arena from "./Arena";
import { createCard, distributeCards } from "../lib/utils.js";
import { useState } from "react";

const GameBoard = () => {
  const [cards, setCards] = useState([]);
  const [gameStats, setGameStats] = useState({
    hasStarted: false,
    playerTurn: true,
    hasEnded: false,
    AITurn: false,
    playerScore: 0,
    AIScore: 0,
    playerWon: false,
    AIwon: false,
    AIAlgo: 0, // by default = 0 --> ExpectiMiniMax Algo , 1 --> Monte Carlo Tree Search , 3 --> Reinforcement Learning, 4 --> NN(function approximation)
  });

  useEffect(() => {
    distributeCards(cards, setCards);
  }, []);

  return (
    <>
      <div className="grid grid-rows-12 h-screen w-screen">
        <div className="row-span-2 z-100 ">
          <EnemyHand
            cards={cards}
            setCards={setCards}
            gameStats={gameStats}
            setGameStats={setGameStats}
          />
        </div>
        <div className="row-span-8">
          <Arena
            cards={cards}
            setCards={setCards}
            gameStats={gameStats}
            setGameStats={setGameStats}
          />
        </div>
        <div className="row-span-2 ">
          <PlayerHand
            cards={cards}
            setCards={setCards}
            gameStats={gameStats}
            setGameStats={setGameStats}
          />
        </div>
      </div>
    </>
  );
};

export default GameBoard;
