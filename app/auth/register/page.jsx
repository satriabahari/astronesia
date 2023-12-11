"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaArrowLeft, FaCode, FaGoogle } from "react-icons/fa";
import { signIn } from "next-auth/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createData } from "@/utils/api";

export default function RegisterPage() {
  const [userInfo, setUserInfo] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createData("/auth/register", {
        username: userInfo.username,
        email: userInfo.email,
        password: userInfo.password,
      });
      toast.success("Data added successfully", {
        position: toast.POSITION.TOP_CENTER,
      });
      setTimeout(() => {
        return signIn(undefined, { callbackUrl: "/auth/login" });
      }, 2000);
    } catch (error) {
      toast.error("Error adding data", {
        position: toast.POSITION.TOP_CENTER,
      });
      console.log(error);
    }
  };
  return (
    // <section className='px-8 m-auto'>
    <>
      <div className="grid w-full grid-rows-2 md:h-screen md:grid-cols-2 md:grid-rows-none ">
        <div className="flex flex-col justify-between bg-gray-50 px-8 pb-12 pt-24 text-center dark:bg-gray-800 md:px-28 md:pb-8 md:pt-[10rem]">
          <div>
            <div className="m-auto mb-8 w-fit rounded-full bg-gray-100 p-4 text-blue-500 dark:bg-gray-700">
              <FaCode size="25" />
            </div>
            <h3 className="mb-2 text-3xl font-medium text-gray-800 dark:text-gray-50">
              Hello Falles!
            </h3>
            <p className="mb-8 text-gray-500">Register your account</p>
            <form
              action=""
              className="flex flex-col gap-y-4"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                placeholder="Name"
                value={userInfo.username}
                className="rounded-md bg-gray-100 px-4 py-2 text-gray-800 focus:outline-blue-500 dark:bg-gray-700 dark:text-gray-50"
                onChange={(e) =>
                  setUserInfo({ ...userInfo, username: e.target.value })
                }
              />
              <input
                type="email"
                placeholder="Email"
                value={userInfo.email}
                className="rounded-md bg-gray-100 px-4 py-2 text-gray-800 focus:outline-blue-500 dark:bg-gray-700 dark:text-gray-50"
                onChange={(e) =>
                  setUserInfo({ ...userInfo, email: e.target.value })
                }
              />
              <input
                type="password"
                placeholder="Password"
                value={userInfo.password}
                className="rounded-md bg-gray-100 px-4 py-2 text-gray-800 focus:outline-blue-500 dark:bg-gray-700 dark:text-gray-50"
                onChange={(e) =>
                  setUserInfo({ ...userInfo, password: e.target.value })
                }
              />
              <button className="rounded-md bg-blue-500 py-2 text-white transition active:scale-90">
                Register
              </button>
            </form>
          </div>

          <p className="text-gray-500 mt-4 md:mt-0">
            Have an account?
            <Link href={"/auth/login"} className="font-semibold text-blue-500">
              {" "}
              Sign In
            </Link>
          </p>
        </div>

        <div className="flex flex-col items-center justify-center bg-blue-500 md:pt-[6.5rem]">
          <div className="flex flex-col items-center justify-center text-center">
            <Image
              src="/axel-bubble.png"
              width="400"
              height="400"
              alt="logo Astronesia"
              className="w-72 md:w-96"
            />
            <h3 className="mb-4 text-4xl font-medium text-white">
              Astronesia
              <br /> Elementary School
            </h3>
          </div>
        </div>
      </div>
      <ToastContainer autoClose={1000} />
    </>
    // </section>
  );
}
