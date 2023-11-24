"use client";

import { useThemeContext } from "@/context/theme-context";
import React from "react";
import { FaMoon } from "react-icons/fa";

export default function ToggleTheme() {
  const { toggleTheme } = useThemeContext();

  return (
    <button
      className="rounded-full bg-gray-700 p-2 text-white transition active:scale-90 dark:bg-white dark:text-gray-800"
      onClick={toggleTheme}
    >
      <FaMoon />
    </button>
  );
}
