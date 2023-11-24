"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBarAdmin = ({ table }) => {
  const [input, setInput] = useState("");

  const router = useRouter();

  const handleSearch = async (event) => {
    event.preventDefault();
    {
      input
        ? router.push(`/admin/${table}?q=${input}`)
        : router.push(`/admin/${table}`);
    }
  };

  return (
    <form
      className="flex items-center justify-end rounded-md bg-gray-100 px-2 dark:bg-gray-700"
      onSubmit={handleSearch}
    >
      <button className="text-gray-400" onClick={() => handleSearch}>
        <FaSearch />
      </button>
      <input
        type="text"
        className="ml-2 w-full bg-gray-100 text-sm text-gray-700 outline-none dark:bg-gray-700 dark:text-gray-50"
        placeholder="Search..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </form>
  );
};

export default SearchBarAdmin;
