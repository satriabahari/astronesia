"use client";

import { admin, sidebars } from "../lib/data";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <header className="p-4 pr-0 pt-[4.6rem]">
      <section className="h-full rounded-lg bg-gray-50 px-2 py-3 text-gray-500 dark:bg-gray-700 md:px-6">
        <div className="flex flex-col items-center gap-y-2 py-4">
          <Image
            src={"/satria-bahari.jpg"}
            width={"60"}
            height={"60"}
            alt="satria"
            className="mb-2 rounded-full"
          />
          {admin.map((data, index) => (
            <>
              <p
                key={index}
                className="hidden text-sm font-medium text-gray-700 dark:text-gray-50 md:block"
              >
                {data.data}
              </p>
            </>
          ))}
        </div>
        <hr className="mb-8 border border-blue-500" />

        <nav className="">
          <ul className="flex flex-col items-center gap-y-4 md:items-start">
            {sidebars.map((sidebar) => (
              <li
                key={sidebar.hash}
                className={`${
                  pathname === sidebar.hash
                    ? " w-fit rounded-md bg-gray-200 px-2 py-1 transition dark:bg-gray-600"
                    : ""
                } text-gray-700 transition-all last:mt-60 hover:w-full hover:scale-105 hover:rounded-md hover:bg-gray-200 hover:px-2 hover:py-1 hover:last:scale-100 hover:last:bg-gray-50 hover:last:px-0 hover:last:py-0 hover:last:text-red-500 dark:text-gray-50 dark:hover:bg-gray-600 dark:hover:last:bg-gray-700 dark:hover:last:text-red-500 md:last:mt-32`}
              >
                <Link
                  href={sidebar.hash}
                  className="flex items-center gap-x-2 text-sm "
                >
                  <span>{sidebar.icon}</span>
                  <p className="hidden md:block">{sidebar.name}</p>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </section>
    </header>
  );
};

export default Sidebar;
