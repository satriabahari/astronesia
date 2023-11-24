import React from "react";
import Spinner from "./Spinner";

const ButtonSubmit = ({ isMutating, text }) => {
  return (
    <button
      type="submit"
      className=" mr-4 rounded-sm bg-blue-500 px-6 py-2 text-gray-50"
    >
      {isMutating ? <Spinner /> : `${text}`}
    </button>
  );
};

export default ButtonSubmit;
