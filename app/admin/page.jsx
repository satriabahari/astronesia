"use client";

import React from "react";
import SectionHeading from "@/components/SectionHeading";
import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa";

export default function Admin() {
  return (
    <section className="textgray-700 p-4 pt-[74px] dark:text-gray-50">
      <div className="flex h-full w-full flex-col items-center justify-center rounded-lg bg-gray-50 px-8 dark:bg-gray-700 md:px-0">
        <p className="text-xl text-gray-700 dark:text-gray-50 md:text-2xl">
          Welcome to,
        </p>
        <SectionHeading>Admin.Astronesia</SectionHeading>
        <Image
          src="/education.jpg"
          width="325"
          height="325"
          alt="logo"
          className="my-8 rounded-full"
        />
        <div className="flex items-center gap-x-4">
          <FaArrowLeft />
          <p>Please select a menu</p>
        </div>
      </div>
    </section>
  );
}
