import AdminPage from "@/components/AdminPage";
import ModalDelete from "@/components/ModalDelete";
import NoDataDisplay from "@/components/NoDataDisplayAdmin";
import { getData } from "@/utils/api";
import Link from "next/link";
import React from "react";
import { FaEdit } from "react-icons/fa";

const Students = async ({ searchParams }) => {
  const getQuery = searchParams.q;
  const students = await getData("/students", `q=${getQuery}`);

  return (
    <AdminPage table="students">
      {students.data.length === 0 ? (
        <NoDataDisplay />
      ) : (
        <table className="w-full table-auto border-collapse rounded-xl bg-gray-50 text-left dark:bg-gray-700 ">
          <thead>
            <tr>
              <th className="border-b border-gray-400 px-8 py-4 text-sm font-medium text-gray-700 dark:text-gray-50 ">
                No.
              </th>
              <th className="border-b border-gray-400 px-8 py-4 text-sm font-medium text-gray-700 dark:text-gray-50">
                NISN
              </th>
              <th className="border-b border-gray-400 px-8 py-4 text-sm font-medium text-gray-700 dark:text-gray-50">
                Name
              </th>
              <th className="border-b border-gray-400 px-8 py-4 text-sm font-medium text-gray-700 dark:text-gray-50">
                Address
              </th>
              <th className="border-b border-gray-400 px-8 py-4 text-sm font-medium text-gray-700 dark:text-gray-50">
                Email
              </th>
              <th className="border-b border-gray-400 px-8 py-4 text-sm font-medium text-gray-700 dark:text-gray-50">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {students.data.map((student, index) => (
              <tr key={index}>
                <td className="border-b border-gray-400 px-8 py-4 text-sm text-gray-700 dark:text-gray-50">
                  {index + 1}
                </td>
                <td className="border-b border-gray-400 px-8 py-4 text-sm text-gray-700 dark:text-gray-50">
                  {student.nisn}
                </td>
                <td className="border-b border-gray-400 px-8 py-4 text-sm text-gray-700 dark:text-gray-50">
                  {student.name}
                </td>
                <td className="border-b border-gray-400 px-8 py-4 text-sm text-gray-700 dark:text-gray-50">
                  {student.address}
                </td>
                <td className="border-b border-gray-400 px-8 py-4 text-sm text-gray-700 dark:text-gray-50">
                  {student.email}
                </td>
                <td className="border-b border-gray-400 px-8 py-4 text-sm text-gray-700 dark:text-gray-50">
                  <button className="mr-2 rounded-sm bg-blue-500 p-2 text-gray-50 transition active:scale-90">
                    <Link
                      href={`/admin/students/edit/${student.id}`}
                      className=""
                    >
                      <FaEdit />
                    </Link>
                  </button>
                  <ModalDelete id={student.id} table="students" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </AdminPage>
  );
};

export default Students;
