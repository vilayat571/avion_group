import React from "react";
import { results } from "../constants/results";

const ResultsOf = () => {
  return (
    <div className="w-full flex items-center justify-center my-12">
      <div className="grid grid-cols-5 w-full px-12">
        {results.map((item) => {
          return (
            <p key={item.id} className="text col-span-1 flex flex-col items-center gap-1">
              <span className="font-semibold text-6xl"> {item.number}</span>
              <span> {item.text}</span>
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default ResultsOf;
