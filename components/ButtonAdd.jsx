import Link from "next/link";
import React from "react";
import { FaPlus } from "react-icons/fa";

const ButtonAdd = ({ table }) => {
  return (
    <Link
      href={`/admin/${table}/add`}
      className="flex w-fit items-center justify-center gap-x-2 rounded-md bg-blue-500 px-4 py-2 text-sm text-gray-50"
    >
      <FaPlus size="12" />
      Add {table}
    </Link>
  );
};

export default ButtonAdd;
