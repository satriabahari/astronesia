"use client";

import React, { useState } from "react";
import PopMenu from "./PopMenu";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";

export default function HamburgerMenu() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <section className="flex md:hidden">
      <button
        className="text-gray-800 dark:text-white"
        onClick={() => handleClick()}
      >
        {isActive ? (
          <React.Fragment>
            <RxCross2 size={35} />
            <PopMenu />
          </React.Fragment>
        ) : (
          <RxHamburgerMenu size={35} />
        )}
      </button>
    </section>
  );
}
