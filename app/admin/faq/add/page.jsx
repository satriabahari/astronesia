"use client";

import ButtonSubmit from "@/components/ButtonSubmit";
import ManageHeading from "@/components/ManageHeading";
import { createData } from "@/utils/api";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddFaq = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [isMutating, setIsMutating] = useState(false);

  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsMutating(true);
    try {
      await createData("/faqs", { question, answer });
      toast.success("Data added successfully", {
        position: toast.POSITION.TOP_CENTER,
      });
      setIsMutating(false);

      setTimeout(() => {
        router.push("/admin/faq");
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
      <ManageHeading table="faq" />

      <div className="-mb-[14rem] mt-4 grid grid-rows-[1fr_3fr] rounded-lg bg-gray-50 px-8 py-4 dark:bg-gray-700 md:-mb-[12rem] md:grid-rows-[1fr_4fr] md:px-16 md:py-8">
        <h3 className="mb-4 text-center text-3xl font-medium text-gray-700 dark:text-gray-50">
          Add FAQ
        </h3>

        <form
          className="flex flex-col justify-between gap-2 md:grid md:grid-cols-2"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col">
            <label className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-50">
              Question
            </label>
            <input
              type="text"
              className="rounded-sm border border-gray-300 bg-gray-50 px-2 py-2 text-sm text-gray-700 outline-none dark:border-gray-900 dark:bg-gray-800 dark:text-gray-50"
              placeholder="Question"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-50">
              Answer
            </label>
            <input
              type="text"
              className="rounded-sm border border-gray-300 bg-gray-50 px-2 py-2 text-sm text-gray-700 outline-none dark:border-gray-900 dark:bg-gray-800 dark:text-gray-50"
              placeholder="Answer"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
            />
          </div>
          <div>
            <ButtonSubmit isMutating={isMutating} text="Submit" />
            <button className="rounded-sm border border-gray-500 bg-gray-50 px-6 py-2 text-blue-500">
              <Link href="/admin/faq">Cancel</Link>
            </button>
          </div>
        </form>
      </div>
      <ToastContainer autoClose={1000} />
    </section>
  );
};

export default AddFaq;
