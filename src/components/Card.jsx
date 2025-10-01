import React from "react";

const Card = ({ card }) => {
  // console.log(cardNumber, isFlipped, isSelect, rowNumber, colNumber);
  if (card.cardNumber === undefined) {
    console.log("no card");
    return;
  }
  return (
    <div className="w-full h-full  ">
      <img
        src={`/cards_1/${card.cardNumber}.png`}
        className="w-full h-full object-fit"
      />
    </div>
  );
};

export default Card;
