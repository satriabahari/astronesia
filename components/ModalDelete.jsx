"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { IoWarningOutline } from "react-icons/io5";
import Spinner from "./Spinner";
import { deleteData } from "@/utils/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ModalDelete = ({ id, table }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isMutating, setIsMutating] = useState(false);

  const handleDelete = async (id) => {
    setIsMutating(true);
    try {
      await deleteData(`/${table}/${id}`);
      toast.success("Data deleted successfully", {
        position: toast.POSITION.TOP_CENTER,
      });
      setTimeout(() => {
        setIsMutating(false);
        setIsOpen(false);
        router.refresh();
      }, 2000);
    } catch (error) {
      console.error("Error deleting data:", error);
      setIsMutating(false);
      setIsOpen(false);
    }
  };

  return (
    <>
      <button
        className="mr-2 rounded-sm  bg-red-500 p-2 text-gray-50 transition active:scale-90"
        onClick={() => setIsOpen(true)}
      >
        <FaTrash />
      </button>

      {isOpen && (
        <div className="fixed left-0 top-0 flex h-screen w-full items-center justify-center bg-gray-600 bg-opacity-50">
          <div className="flex w-[35%] flex-col items-center justify-center gap-y-2 rounded-lg bg-gray-50 p-6 text-center text-gray-600 drop-shadow-lg dark:bg-gray-700">
            <div className="rounded-full bg-red-100 p-2">
              <IoWarningOutline color={"red"} size={20} />
            </div>
            <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-50">
              Are You Sure?
            </h2>
            <p className="text-sm text-gray-700 dark:text-gray-50">
              If you delete the data will be gone forever
            </p>
            <div className="mt-2 flex gap-x-4">
              <button
                type="button"
                className="rounded-sm border border-gray-500 bg-gray-50 px-8 py-2 font-medium"
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="m-auto rounded-sm bg-red-500 px-8 py-2 font-medium text-gray-50"
                onClick={() => handleDelete(id)}
              >
                {isMutating ? <Spinner /> : "Delete"}
              </button>
            </div>
          </div>
        </div>
      )}
      <ToastContainer autoClose={1000} />
    </>
  );
};

export default ModalDelete;
