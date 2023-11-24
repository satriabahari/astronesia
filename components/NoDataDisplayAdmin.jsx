import React from "react";
import { LuFileX } from "react-icons/lu";

const NoDataDisplayAdmin = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-y-2 rounded-xl bg-gray-100 dark:bg-gray-700 md:gap-y-4">
      <LuFileX className="text-5xl text-blue-500 md:text-8xl" />
      <h1 className="text-xl font-semibold text-blue-500 md:text-3xl">
        No Data to Display ...
      </h1>
      <p className="text-center text-xs text-gray-700 dark:text-gray-50 md:text-sm">
        We couldnt find what you searched for.
        <br />
        Try search again.
      </p>
    </div>
  );
};

export default NoDataDisplayAdmin;
