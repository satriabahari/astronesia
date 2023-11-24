"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ page }) => {
  const [input, setInput] = useState("");

  const router = useRouter();

  const handleSearch = async (event) => {
    event.preventDefault();
    {
      input ? router.push(`/${page}?q=${input}`) : router.push(`/${page}`);
    }
  };

  return (
    <form
      className="flex h-8 w-60 items-center justify-end rounded-md bg-gray-200 px-2 dark:bg-gray-700"
      onSubmit={handleSearch}
    >
      <button className="text-gray-400" onClick={() => handleSearch}>
        <FaSearch />
      </button>
      <input
        type="text"
        className="ml-2 w-full bg-gray-200 text-sm text-gray-700 outline-none dark:bg-gray-700 dark:text-gray-50"
        placeholder="Search..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </form>
  );
};

export default SearchBar;
