import React from "react";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import { getData } from "@/utils/api";
import SearchBar from "@/components/SearchBar";
import NoDataDisplay from "@/components/NoDataDisplay";

export default async function Publications({ searchParams }) {
  const getQuery = searchParams.q;
  const publications = await getData("/publications", `q=${getQuery}`);
  return (
    <section className="flex h-full flex-col items-center justify-center bg-gray-50 px-4 py-24 dark:bg-gray-800 md:h-full md:py-28">
      <div className="flex flex-col items-center justify-center">
        <p className="text-xl text-gray-700 dark:text-gray-50 md:text-2xl">
          Welcome to,
        </p>
        <SectionHeading>Publication.Astronesia</SectionHeading>

        <SearchBar page={"publication"} />

        <p className="mt-4 text-center text-sm text-gray-700 dark:text-gray-50">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>

      {publications.data.length === 0 ? (
        <NoDataDisplay />
      ) : (
        <div className="mt-8 grid gap-8 md:grid-cols-4">
          {publications.data.map((publication, index) => (
            <div
              key={index}
              className="rounded-md border border-gray-700 bg-gray-200 dark:border-gray-500 dark:bg-gray-700"
            >
              <Image
                src="/dicoding.png"
                width={300}
                height={300}
                alt="image publications"
                className="w-full overflow-hidden rounded-sm"
              ></Image>

              <div className="flex flex-col gap-y-2 p-4">
                <i className="text-sm text-gray-600 dark:text-gray-200">News</i>
                <h2 className="text-xl font-medium text-gray-700 dark:text-gray-50">
                  {publication.title}
                </h2>
                <p className="text-sm text-gray-700 dark:text-gray-50">
                  {publication.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
