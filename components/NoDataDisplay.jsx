import React from "react";
import { LuFileX } from "react-icons/lu";

const NoDataDisplay = () => {
  return (
    <div className="flex flex-col items-center justify-center md:mt-28 mt-36 gap-y-2 md:gap-y-4">
      <LuFileX className="text-gray-700 dark:text-gray-300 text-5xl md:text-7xl" />
      <h1 className="md:text-3xl text-2xl font-semibold text-gray-700 dark:text-gray-300">
        No Data to Display ...
      </h1>
      <p className="text-center md:text-sm text-xs text-gray-700 dark:text-gray-300">
        We couldnt find what you searched for.
        <br />
        Try search again.
      </p>
    </div>
  );
};

export default NoDataDisplay;
