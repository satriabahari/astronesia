import AdminPage from "@/components/AdminPage";
import ModalDelete from "@/components/ModalDelete";
import NoDataDisplay from "@/components/NoDataDisplayAdmin";
import { getData } from "@/utils/api";
import Link from "next/link";
import React from "react";
import { FaEdit } from "react-icons/fa";

const Faq = async ({ searchParams }) => {
  const getQuery = searchParams.q;
  const faqs = await getData("/faqs", `q=${getQuery}`);

  return (
    <AdminPage table="faq">
      {faqs.data.length === 0 ? (
        <NoDataDisplay />
      ) : (
        <table className="w-full table-auto border-collapse rounded-xl bg-gray-50 text-left dark:bg-gray-700">
          <thead>
            <tr>
              <th className="border-b border-gray-400 px-8 py-4 text-sm font-medium text-gray-700 dark:text-gray-50">
                No.
              </th>
              <th className="border-b border-gray-400 px-8 py-4 text-sm font-medium text-gray-700 dark:text-gray-50">
                Question
              </th>
              <th className="border-b border-gray-400 px-8 py-4 text-sm font-medium text-gray-700 dark:text-gray-50">
                Answer
              </th>
              <th className="border-b border-gray-400 px-8 py-4 text-sm font-medium text-gray-700 dark:text-gray-50">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {faqs.data.map((faq, index) => (
              <tr key={index}>
                <td className="border-b border-gray-400 px-8 py-4 text-sm text-gray-700  dark:text-gray-50">
                  {index + 1}
                </td>
                <td className="border-b border-gray-400 px-8 py-4 text-sm text-gray-700 dark:text-gray-50">
                  {faq.question}
                </td>
                <td className="border-b border-gray-400 px-8 py-4 text-sm text-gray-700 dark:text-gray-50">
                  {faq.answer}
                </td>
                <td className="border-b border-gray-400 px-8 py-4 text-sm text-gray-700  dark:text-gray-50">
                  <button className="mr-2 rounded-sm  bg-blue-500 p-2 text-gray-50 transition active:scale-90">
                    <Link href={`/admin/faq/edit/${faq.id}`}>
                      <FaEdit />
                    </Link>
                  </button>
                  <ModalDelete id={faq.id} table="faqs" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </AdminPage>
  );
};

export default Faq;
