import React from "react";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import { getData } from "@/utils/api";
import SearchBar from "@/components/SearchBar";
import NoDataDisplay from "@/components/NoDataDisplay";

export default async function LibraryPage({ searchParams }) {
  const getQuery = searchParams.q;
  const libraries = await getData("/libraries", `q=${getQuery}`);

  return (
    <section className="flex h-full flex-col items-center justify-center bg-gray-50 px-4 py-24 dark:bg-gray-800 md:h-full md:py-28">
      <div className="flex flex-col items-center justify-center">
        <p className="text-xl text-gray-700 dark:text-gray-50 md:text-2xl">
          Welcome to,
        </p>
        <SectionHeading>Library.Astronesia</SectionHeading>

        <SearchBar page={"library"} />

        <p className="mt-4 text-center text-xs text-gray-700 dark:text-gray-50 md:text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>

      {libraries.data.length === 0 ? (
        <NoDataDisplay />
      ) : (
        <div className="mt-8 grid grid-cols-2 gap-8 md:grid-cols-5">
          {libraries.data.map((library, index) => (
            <div key={index} className="w-full">
              <Image
                src="/cover.png"
                width={200}
                height={200}
                alt="image publications"
                className="overflow-hidden rounded-xl"
              ></Image>

              <h2 className="mt-4 text-gray-700 dark:text-gray-50">
                {library.title}
              </h2>
              <p className="mt-1 text-xs text-gray-500">
                {library.description}
              </p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
