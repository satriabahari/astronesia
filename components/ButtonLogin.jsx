import React from "react";
import Link from "next/link";
import { authUserSession } from "@/lib/auth-libs";

const ButtonLogin = async () => {
  const user = await authUserSession();
  return (
    <>
      <Link
        href={"/api/auth/signin"}
        className="hidden rounded-full bg-blue-500 px-4 py-1 text-white transition active:scale-90 md:block"
      >
        Login
      </Link>
    </>
  );
};

export default ButtonLogin;
