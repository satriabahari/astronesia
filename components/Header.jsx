import { links } from "../lib/data";
import Link from "next/link";
import React from "react";
import HamburgerMenu from "./HamburgerMenu";
import ToggleTheme from "./ToggleTheme";
import ButtonLogin from "./ButtonLogin";
import { authUserSession } from "@/lib/auth-libs";
import ButtonLogout from "./ButtonLogout";

export default async function Header() {
  const user = await authUserSession();
  return (
    <header className="relative z-[999]">
      <nav className="fixed left-0 right-0 top-0 flex h-16 items-center justify-between bg-gray-50 px-4 drop-shadow-lg dark:bg-gray-800 md:px-16">
        <h3 className="text-2xl text-gray-800 dark:text-gray-50">Astronesia</h3>

        <ul className="dark:text-gray-250 hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.hash} className="text-sm">
              <Link
                href={link.hash}
                className="text-gray-600 hover:text-gray-950 dark:text-gray-400 dark:hover:text-gray-50"
              >
                {link.name}
              </Link>
            </li>
          ))}
          {user && (
            <li>
              <Link
                href="/admin"
                className="text-[14px] text-gray-600 hover:text-gray-950 dark:text-gray-400 dark:hover:text-gray-50"
              >
                Admin
              </Link>
            </li>
          )}
        </ul>

        <div className="flex items-center gap-4">
          <ToggleTheme />
          {user ? <ButtonLogout /> : <ButtonLogin />}
          <HamburgerMenu />
        </div>
      </nav>
    </header>
  );
}
