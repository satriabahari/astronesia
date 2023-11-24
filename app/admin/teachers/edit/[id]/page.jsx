"use client";

import ButtonSubmit from "@/components/ButtonSubmit";
import ManageHeading from "@/components/ManageHeading";
import { getData, updateData } from "@/utils/api";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdateTeacher = ({ params }) => {
  const [nip, setNip] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nohp, setNohp] = useState("");
  const [role, setRole] = useState("");
  const [address, setAddress] = useState("");
  const [isMutating, setIsMutating] = useState(false);

  const router = useRouter();

  const getStudents = async () => {
    const response = await getData(`/teachers/${params.id}`);
    setNip(response.data.nip);
    setName(response.data.name);
    setRole(response.data.role);
    setAddress(response.data.address);
    setNohp(response.data.nohp);
    setEmail(response.data.email);
    setPassword(response.data.password);
    return response.data;
  };

  useEffect(() => {
    getStudents();
  }, []);

  const handleUpdate = async (event) => {
    event.preventDefault();
    setIsMutating(true);
    try {
      await updateData(`/teachers/${params.id}`, {
        nip,
        name,
        role,
        address,
        nohp,
        email,
        password,
      });
      toast.success("Data update successfully", {
        position: toast.POSITION.TOP_CENTER,
      });
      setIsMutating(false);
      setTimeout(() => {
        router.push("/admin/teachers");
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
    <section className="grid grid-rows-[10%_auto] gap-y-6 p-4">
      <ManageHeading table="Teachers" />

      <div className="grid grid-rows-[auto_1fr] gap-4 rounded-lg bg-gray-50 px-16 py-12 dark:bg-gray-700">
        <div className="text-center">
          <h3 className=" mb-4 text-3xl font-medium text-gray-700 dark:text-gray-50">
            Update Teacher
          </h3>
          <p className="mb-4 text-sm text-gray-700 dark:text-gray-50">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
            aperiam dolorum totam, ducimus impedit laborum?
          </p>
        </div>

        <form
          className="grid grid-cols-2 gap-x-8 gap-y-3"
          onSubmit={handleUpdate}
        >
          <div className="flex flex-col">
            <label className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-50">
              NIP
            </label>
            <input
              type="text"
              className="rounded-sm border border-gray-300 bg-gray-50 px-2 py-2 text-sm text-gray-700 outline-none dark:border-gray-900 dark:bg-gray-800 dark:text-gray-50"
              placeholder="F1E122181"
              value={nip}
              onChange={(e) => setNip(e.target.value)}
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
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-50">
              No HP
            </label>
            <input
              type="text"
              className="rounded-sm border border-gray-300 bg-gray-50 px-2 py-2 text-sm text-gray-700 outline-none dark:border-gray-900 dark:bg-gray-800 dark:text-gray-50"
              placeholder="082183340920"
              value={nohp}
              onChange={(e) => setNohp(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-50">
              Role
            </label>
            <textarea
              rows={1}
              className="rounded-sm border border-gray-300 bg-gray-50 px-2 py-2 text-sm text-gray-700 outline-none dark:border-gray-900 dark:bg-gray-800 dark:text-gray-50"
              placeholder="Jl. Astronesia"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            />
          </div>
          <div className="col-span-2 flex flex-col">
            <label className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-50">
              Address
            </label>
            <textarea
              rows={1}
              className="rounded-sm border border-gray-300 bg-gray-50 px-2 py-2 text-sm text-gray-700 outline-none dark:border-gray-900 dark:bg-gray-800 dark:text-gray-50"
              placeholder="Jl. Astronesia"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div>
            <ButtonSubmit isMutating={isMutating} text="Update" />
            <button className="rounded-sm border border-gray-500 bg-gray-50 px-6 py-2 text-blue-500">
              <Link href="/admin/teachers">Cancel</Link>
            </button>
          </div>
        </form>
        <ToastContainer autoClose={1000} />
      </div>
    </section>
  );
};

export default UpdateTeacher;
