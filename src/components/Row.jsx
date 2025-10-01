import React from "react";

const Row = ({ row }) => {
  const emptyColsHolder = [0, 1, 2, 3, 4, 5];

  return (
    <div className=" bg-white/10  rounded-xl border border-white/01 backdrop-blur-xs shadow-lg w-full h-full my-auto ">
      <div className="grid grid-cols-8  w-full h-full gap-1 p-1">
        <div className="col-span-2 w-full h-full">
          <div className="border border-white border-dashed rounded-xl h-full w-full"></div>
        </div>
        <div className="col-span-6 w-full h-full grid grid-cols-6 gap-1  ">
          {emptyColsHolder.map((col) => (
            <div
              key={col}
              className="col-span-1 w-full h-full border  border-black box-border  border-dashed rounded-xl text-center "
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Row;
