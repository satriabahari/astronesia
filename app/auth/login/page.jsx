"use client";

import { getData } from "@/utils/api";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaArrowLeft, FaCode, FaGoogle } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function LoginPage() {
  const [userInfo, setUserInfo] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await getData("/auth/login");
    const isEmailRegistered = user.data.some(
      (item) => item.email === userInfo.email,
    );
    if (!isEmailRegistered) {
      return toast.error("Error adding data", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
    return signIn("credentials", {
      username: userInfo.username,
      email: userInfo.email,
      password: userInfo.password,
      callbackUrl: "/",
    });
  };

  return (
    // <section className='px-8 m-auto'>
    <>
      <div className="grid w-full grid-rows-2 md:h-screen md:grid-cols-2 md:grid-rows-none ">
        <div className="flex flex-col justify-between bg-blue-500 pb-16 pt-[6.5rem]">
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

        <div className="flex flex-col justify-between bg-gray-50 px-8 py-12 text-center dark:bg-gray-800 md:px-28 md:pb-8 md:pt-[10rem]">
          <div>
            <div className="m-auto mb-8 w-fit rounded-full bg-gray-100 p-4 text-blue-500 dark:bg-gray-700">
              <FaCode size="25" />
            </div>
            <h3 className="mb-2 text-3xl font-medium text-gray-800 dark:text-gray-50">
              Hello Again!
            </h3>
            <p className="mb-8 text-gray-500">
              Enter your credentials to access your account
            </p>
            <form
              action=""
              className="flex flex-col gap-y-4"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                placeholder="Username"
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
              <button
                type="submit"
                className="rounded-md bg-blue-500 py-2 text-white transition active:scale-90"
              >
                Login
              </button>
            </form>
          </div>

          <p className="text-gray-500">
            Dont have an account?{" "}
            <Link
              href={"/auth/register"}
              className="cursor-pointer font-semibold text-blue-500"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
      <ToastContainer autoClose={1000} />
    </>
    // </section>
  );
}
