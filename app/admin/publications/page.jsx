import Link from "next/link";
import React from "react";
import { FaEdit } from "react-icons/fa";
import ModalDelete from "@/components/ModalDelete";
import { getData } from "@/utils/api";
import AdminPage from "@/components/AdminPage";
import NoDataDisplay from "@/components/NoDataDisplayAdmin";

const Publications = async ({ searchParams }) => {
  const getQuery = searchParams.q;
  const publications = await getData("/publications", `q=${getQuery}`);

  return (
    <AdminPage table="publications">
      {publications.data.length === 0 ? (
        <NoDataDisplay />
      ) : (
        <table className="w-full table-auto border-collapse rounded-xl bg-gray-50 text-left dark:bg-gray-700 ">
          <thead>
            <tr>
              <th className="border-b border-gray-400 px-8 py-4 text-sm font-medium text-gray-700 dark:text-gray-50">
                No.
              </th>
              <th className="border-b border-gray-400 px-8 py-4 text-sm font-medium text-gray-700 dark:text-gray-50">
                Title
              </th>
              <th className="border-b border-gray-400 px-8 py-4 text-sm font-medium text-gray-700 dark:text-gray-50">
                Description
              </th>
              <th className="border-b border-gray-400 px-8 py-4 text-sm font-medium text-gray-700 dark:text-gray-50">
                Image
              </th>
              <th className="border-b border-gray-400 px-8 py-4 text-sm font-medium text-gray-700 dark:text-gray-50">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {publications.data.map((publication, index) => (
              <tr key={index}>
                <td className="border-b border-gray-400 px-8 py-4 text-sm text-gray-700 dark:text-gray-50">
                  {index + 1}
                </td>
                <td className="border-b border-gray-400 px-8 py-4 text-sm text-gray-700 dark:text-gray-50">
                  {publication.title}
                </td>
                <td className="border-b border-gray-400 px-8 py-4 text-sm text-gray-700 dark:text-gray-50">
                  {publication.description}
                </td>
                <td className="border-b border-gray-400 px-8 py-4 text-sm text-gray-700 dark:text-gray-50">
                  {publication.image}
                </td>
                <td className="border-b border-gray-400 px-8 py-4 text-sm text-gray-700 dark:text-gray-50">
                  <button className="mr-2 rounded-sm bg-blue-500 p-2 text-gray-50 transition active:scale-90">
                    <Link
                      href={`/admin/publications/edit/${publication.id}`}
                      className=""
                    >
                      <FaEdit />
                    </Link>
                  </button>
                  <ModalDelete id={publication.id} table="publications" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </AdminPage>
  );
};

export default Publications;
