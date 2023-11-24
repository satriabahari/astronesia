import AdminPage from "@/components/AdminPage";
import ModalDelete from "@/components/ModalDelete";
import NoDataDisplay from "@/components/NoDataDisplayAdmin";
import { getData } from "@/utils/api";
import Link from "next/link";
import React from "react";
import { FaEdit } from "react-icons/fa";

const Teachers = async ({ searchParams }) => {
  const getQuery = searchParams.q;
  const teachers = await getData("/teachers", `q=${getQuery}`);

  return (
    <AdminPage table="teachers">
      {teachers.data.length === 0 ? (
        <NoDataDisplay />
      ) : (
        <table className="w-full table-auto border-collapse rounded-xl bg-gray-50 text-left dark:bg-gray-700">
          <thead>
            <tr>
              <th className="border-b border-gray-400 px-6 py-4 text-xs font-medium text-gray-700 dark:text-gray-50">
                No.
              </th>
              <th className="border-b border-gray-400 px-6 py-4 text-xs font-medium text-gray-700 dark:text-gray-50">
                NIP
              </th>
              <th className="border-b border-gray-400 px-6 py-4 text-xs font-medium text-gray-700 dark:text-gray-50">
                Name
              </th>
              <th className="border-b border-gray-400 px-6 py-4 text-xs font-medium text-gray-700 dark:text-gray-50">
                Role
              </th>
              <th className="border-b border-gray-400 px-6 py-4 text-xs font-medium text-gray-700 dark:text-gray-50">
                Address
              </th>
              <th className="border-b border-gray-400 px-6 py-4 text-xs font-medium text-gray-700 dark:text-gray-50">
                No HP
              </th>
              <th className="border-b border-gray-400 px-6 py-4 text-xs font-medium text-gray-700 dark:text-gray-50">
                Email
              </th>
              <th className="border-b border-gray-400 px-6 py-4 text-xs font-medium text-gray-700 dark:text-gray-50">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {teachers.data.map((teacher, index) => (
              <tr key={index}>
                <td className="border-b border-gray-400 px-6 py-4 text-xs text-gray-700 dark:text-gray-50">
                  {index + 1}
                </td>
                <td className="border-b border-gray-400 px-6 py-4 text-xs text-gray-700 dark:text-gray-50">
                  {teacher.nip}
                </td>
                <td className="border-b border-gray-400 px-6 py-4 text-xs text-gray-700 dark:text-gray-50">
                  {teacher.name}
                </td>
                <td className="border-b border-gray-400 px-6 py-4 text-xs text-gray-700 dark:text-gray-50">
                  {teacher.role}
                </td>
                <td className="border-b border-gray-400 px-6 py-4 text-xs text-gray-700 dark:text-gray-50">
                  {teacher.address}
                </td>
                <td className="border-b border-gray-400 px-6 py-4 text-xs text-gray-700 dark:text-gray-50">
                  {teacher.nohp}
                </td>
                <td className="border-b border-gray-400 px-6 py-4 text-xs text-gray-700 dark:text-gray-50">
                  {teacher.email}
                </td>
                <td className="border-b border-gray-400 px-6 py-4 text-xs text-gray-700 dark:text-gray-50">
                  <button className="mr-2 rounded-sm bg-blue-500 p-2 text-gray-50 transition active:scale-90">
                    <Link href={`/admin/teachers/edit/${teacher.id}`}>
                      <FaEdit />
                    </Link>
                  </button>
                  <ModalDelete id={teacher.id} table="teachers" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </AdminPage>
  );
};

export default Teachers;
