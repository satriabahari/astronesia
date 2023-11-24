import React from "react";

export default function SectionHeading({ children }) {
  return (
    <h2 className="mb-4 text-center text-2xl font-semibold uppercase text-gray-800 dark:text-gray-300 md:text-4xl">
      {children}
    </h2>
  );
}
