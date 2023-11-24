import { links, sosmeds } from "../lib/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="absolute -bottom-[22.7%] left-0 grid scroll-mt-24 justify-center gap-y-12 border-b bg-blue-500 px-4 py-8 md:-bottom-[11.7%] md:grid-cols-2 md:px-16 md:py-12"
    >
      <div className="flex flex-col items-center justify-center md:items-start md:justify-normal">
        <div className="flex items-center">
          <Image
            src={"/logo-(white)-transparan.png"}
            alt="logo"
            width={40}
            height={40}
          />
          <h3 className="ml-2 text-2xl uppercase text-gray-50 dark:text-gray-50">
            Astronesia
          </h3>
        </div>
        <p className="mt-4 w-3/4 text-center text-sm text-gray-50 dark:text-gray-50 md:text-start">
          We aim to provide holistic education in an environment which seeks to
          bring out the potential in every student to the fullest; developing in
          each a strong moral character, imbued with Godly values & principles
          and to guide and prepare him or her to be a leader for the greater
          good and of service to others.
        </p>
      </div>

      <div className="flex flex-col items-center">
        <h3 className="mb-4 font-semibold uppercase text-gray-50">Follow</h3>
        <ul className="grid gap-x-12 gap-y-8 md:grid-cols-2">
          {sosmeds.map((sosmed, index) => (
            <li key={index}>
              <Link
                href={sosmed.url}
                className="flex items-center justify-center md:justify-normal"
              >
                <span className="mr-2 text-gray-50">{sosmed.icon}</span>
                <p className="text-gray-50 dark:text-gray-50">
                  {sosmed.description}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
