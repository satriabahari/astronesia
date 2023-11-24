"use client";

import React from "react";
import { signOut } from "next-auth/react";

const ButtonLogout = () => {
  return (
    <>
      <button
        className="hidden rounded-full bg-blue-500 px-4 py-1 text-white transition active:scale-90 md:block"
        onClick={() => signOut()}
      >
        Logout
      </button>
    </>
  );
};

export default ButtonLogout;
