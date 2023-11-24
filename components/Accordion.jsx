"use client";

import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const Accordion = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-3/4 rounded-xl bg-gray-200 p-4 dark:bg-gray-700">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-gray-700 dark:text-gray-50">
          {question}
        </h3>
        <button
          className="h-fit rounded-full p-2 text-gray-700 hover:bg-gray-700 hover:text-gray-50 dark:text-gray-50 dark:hover:bg-gray-50 dark:hover:text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {" "}
          {isOpen ? <FaAngleUp /> : <FaAngleDown />}
        </button>
      </div>
      {isOpen && <p className="mt-2 pr-8 text-sm text-gray-700 dark:text-gray-50">{answer}</p>}
    </div>
  );
};

export default Accordion;
