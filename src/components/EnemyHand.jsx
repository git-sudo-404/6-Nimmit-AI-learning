import React from "react";

const EnemyHand = () => {
  let emptyCardHolders = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <>
      <div className="bg-black/10 p-1 px-1.5 grid grid-cols-12 gap-1 ml-2.5 mt-2.5 h-19/20 w-69/70 backdrop-blur-sm flex justify-center items-center rounded-xl bg-black/10 border-black/20 border-2 shadow-lg shadow-black/30">
        <div className="col-span-2"></div>
        <div className="col-span-10 h-full w-full grid grid-cols-10 gap-1">
          {emptyCardHolders.map((card) => (
            <div
              key={card}
              className="border border-white border-dashed h-full w-full rounded-xl"
            ></div>
          ))}
        </div>
      </div>
    </>
  );
};

export default EnemyHand;
