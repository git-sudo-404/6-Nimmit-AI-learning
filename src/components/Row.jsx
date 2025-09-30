import React from "react";

const Row = ({ row }) => {
  return (
    <div className=" bg-black/20  rounded-xl border border-black/10 backdrop-blur-xs shadow-lg w-full h-full my-auto">
      Row : {row}
    </div>
  );
};

export default Row;
