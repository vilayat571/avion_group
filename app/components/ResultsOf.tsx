import React from "react";
import { results } from "../constants/results";

const ResultsOf = () => {
  return (
    <div className="w-full flex items-center justify-center mt-20 my-12">
      <div className="grid xl:grid-cols-5 lg:grid-cols-5 md:grid-cols-2 sm:grid-cols-1 gap-y-10 w-full px-12">
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
