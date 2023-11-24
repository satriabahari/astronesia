import Image from "next/image";
import Link from "next/link";
import React from "react";

const CardList = ({ name, role, email }) => {
  return (
    <div className="h-80 w-64 rounded-xl bg-gray-200 drop-shadow-lg dark:bg-gray-700">
      <div className="relative flex h-[30%] items-center justify-center rounded-t-xl bg-blue-500">
        <Image
          src="/satria-bahari.jpg"
          width={"120"}
          height={"120"}
          alt="teacher image"
          className="absolute top-1/3 mb-4 rounded-full border-2 border-gray-50 drop-shadow-xl"
        />
      </div>
      <div className="mt-16 flex h-[70%] flex-col items-center p-2 text-center">
        <h2 className="text-lg font-medium capitalize dark:text-gray-50">{name}</h2>
        <p className="text-sm font-medium capitalize text-gray-600 dark:text-gray-200">{role}</p>
        <Link
          href={"https://instagram.com/satriaabaharii_"}
          className="mt-2 text-sm text-gray-500 dark:text-gray-300"
        >
          {email}
        </Link>
        <button className="mt-6 rounded-full bg-blue-500 px-4 py-2 text-xs text-gray-50">
          View Profile
        </button>
      </div>
    </div>
  );
};

export default CardList;
