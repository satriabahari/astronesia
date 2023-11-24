import React from "react";
import SectionHeading from "@/components/SectionHeading";
import CardList from "@/components/CardList";
import { getData } from "@/utils/api";

export default async function ListPage() {
  const students = await getData("/students");
  const teachers = await getData("/teachers");

  return (
    <section
      id="list"
      className="flex flex-col items-center justify-center bg-gray-50 pb-16 pt-28 dark:bg-gray-800 md:px-8"
    >
      <p className="text-2xl text-gray-700 dark:text-gray-50">Welcome to,</p>
      <SectionHeading>List.Astronesia</SectionHeading>

      <div className="mb-12 mt-4 flex w-3/4 flex-wrap items-center justify-evenly gap-y-8 text-center text-gray-800 dark:text-gray-50">
        {teachers.data.map((teacher, index) => (
          <CardList
            key={index}
            name={teacher.name}
            role={teacher.role}
            email={teacher.email}
          />
        ))}
      </div>

      <div className="flex w-full overflow-x-scroll md:w-auto md:overflow-x-auto">
        <table className="mt-12 table-auto border-collapse rounded-md bg-gray-100 text-left dark:bg-gray-700">
          <thead>
            <tr>
              <th className="border-b border-gray-400 px-8 py-4 text-sm font-medium text-gray-700 dark:text-gray-50">
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
