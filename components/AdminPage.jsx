import React from "react";
import Link from "next/link";
import { FaPlus } from "react-icons/fa";
import SearchBarAdmin from "./SearchBarAdmin";

export default function AdminPage({ children, table }) {
  return (
    <section className="grid h-screen grid-rows-[1fr_0.5fr_8fr] gap-y-6 p-4 pt-[74px]">
      <div className="flex flex-col justify-between rounded-lg bg-gray-50 px-8 py-2 dark:bg-gray-700">
        <h1 className="font-medium capitalize text-gray-700 dark:text-gray-50">
          Manage {table}
        </h1>
        <p className="text-xs font-medium capitalize text-blue-500">
          Admin Dashboard /{" "}
          <span className="text-gray-700 dark:text-gray-50"> {table}</span>
        </p>
      </div>

      <div className="flex justify-between gap-x-4">
        <SearchBarAdmin table={table} />
        <Link
          href={`/admin/${table}/add`}
          className="flex w-fit items-center justify-center gap-x-2 rounded-md bg-blue-500 px-4 py-2 text-sm capitalize text-gray-50 transition active:scale-90"
        >
          <FaPlus size="12" />
          Add <span>{table}</span>
        </Link>
      </div>

      <div className="h-full overflow-auto">{children}</div>
    </section>
  );
}
