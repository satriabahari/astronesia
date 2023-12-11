"use client";

import ButtonSubmit from "@/components/ButtonSubmit";
import ManageHeading from "@/components/ManageHeading";
import { createData } from "@/utils/api";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddStudent = () => {
  const [nisn, setNisn] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isMutating, setIsMutating] = useState(false);

  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsMutating(true);
    try {
      await createData("/students", {
        nisn,
        name,
        email,
        password,
        address,
      });
      toast.success("Data added successfully", {
        position: toast.POSITION.TOP_CENTER,
      });
      setIsMutating(false);

      setTimeout(() => {
        router.push("/admin/students");
        router.refresh();
      }, 2000);
    } catch (error) {
      toast.error("Error adding data", {
        position: toast.POSITION.TOP_CENTER,
      });
      setIsMutating(false);
    }
  };

  return (
    <section className="grid grid-rows-[10%_auto] p-4 pt-[4.6rem]">
      <ManageHeading table="Students" />

      <div className="mt-4 grid grid-rows-[1fr_6fr] rounded-lg bg-gray-50 px-8 py-4 dark:bg-gray-700 md:grid-rows-[1fr_4fr] md:px-16 md:py-8">
        <h3 className=" mb-4 text-center text-xl font-medium text-gray-700 dark:text-gray-50 md:text-3xl">
          Add Student
        </h3>

        <form
          className="flex flex-col gap-2 md:grid md:grid-cols-2"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col">
            <label className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-50">
              NISN
            </label>
            <input
              type="text"
              className="rounded-sm border border-gray-300 bg-gray-50 px-2 py-2 text-sm text-gray-700 outline-none dark:border-gray-900 dark:bg-gray-800 dark:text-gray-50"
              placeholder="F1E122181"
              value={nisn}
              onChange={(e) => setNisn(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-50">
              Name
            </label>
            <input
              type="text"
              className="rounded-sm border border-gray-300 bg-gray-50 px-2 py-2 text-sm text-gray-700 outline-none dark:border-gray-900 dark:bg-gray-800 dark:text-gray-50"
              placeholder="Satria Bahari"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-50">
              Email
            </label>
            <input
              type="email"
              className="rounded-sm border border-gray-300 bg-gray-50 px-2 py-2 text-sm text-gray-700 outline-none dark:border-gray-900 dark:bg-gray-800 dark:text-gray-50"
              placeholder="satriabahari@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-50">
              Password
            </label>
            <input
              type="password"
              className="rounded-sm border border-gray-300 bg-gray-50 px-2 py-2 text-sm text-gray-700 outline-none dark:border-gray-900 dark:bg-gray-800 dark:text-gray-50"
              placeholder="*****"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="col-span-2 flex flex-col">
            <label className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-50">
              Address
            </label>
            <textarea
              className="rounded-sm border border-gray-300 bg-gray-50 px-2 py-2 text-sm text-gray-700 outline-none dark:border-gray-900 dark:bg-gray-800 dark:text-gray-50"
              placeholder="Jl. Astronesia"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div>
            <ButtonSubmit isMutating={isMutating} text="Submit" />
            <button className="rounded-sm border border-gray-500 bg-gray-50 px-6 py-2 text-blue-500">
              <Link href="/admin/students">Cancel</Link>
            </button>
          </div>
        </form>
        <ToastContainer autoClose={1000} />
      </div>
    </section>
  );
};

export default AddStudent;
