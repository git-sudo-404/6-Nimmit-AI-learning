import React, { useRef } from "react";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

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

  const Draggable = card.rowNumber === 5; // 1 if in playerHande , 0 if in AI/EnemyHand .

  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: `${card.cardNumber}`,
    disabled: !Draggable,
  });

  const style = transform
    ? {
      transform: CSS.Translate.toString(transform),
      zIndex: 100, // Make sure the dragged card is on top
    }
    : undefined; // No transform when not dragging

  return (
    <div
      className="w-full h-full "
      onMouseEnter={playsound}
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={style}
    >
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
