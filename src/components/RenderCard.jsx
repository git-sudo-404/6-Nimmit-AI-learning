import React from "react";

const RenderCard = ({ card }) => {
  if (!card) return NULL;

  const cardImage = `../assets/cards/${cardNumber}`;

  return (
    <>
      <div>
        <img src={cardImage} />
      </div>
    </>
  );
};

export default RenderCard;
