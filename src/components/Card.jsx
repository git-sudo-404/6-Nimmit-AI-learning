import React, { useRef } from "react";

const Card = ({ card }) => {
  if (card.cardNumber === undefined) {
    return;
  }

  const audioRef = useRef(null);

  const playsound = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
  };

  return (
    <div className="w-full h-full " onMouseEnter={playsound}>
      <audio ref={audioRef} prefoad="auto" className="hidden" id="CardHove">
        <source src="/sound/thud.ogg" type="audio/ogg" />
      </audio>
      {!card.isFlipped ? (
        <img
          src={`/cards_1/${card.cardNumber}.png`}
          className="w-full h-full object-fit"
        />
      ) : (
        <img
          src={`/cards_1/0.png`}
          className="w-full h-full object-fit rounded-xl"
        />
      )}
    </div>
  );
};

export default Card;
