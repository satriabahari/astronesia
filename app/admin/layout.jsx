import Sidebar from "@/components/Sidebar";
import { Suspense } from "react";

export default function AdminLayout({ children }) {
  return (
    <section className="grid min-h-screen grid-cols-[15.5%_auto] bg-gray-200 dark:bg-gray-800 md:h-screen md:grid-cols-[20%_auto]">
      <Sidebar />
      <Suspense fallback={"Loading..."}>{children}</Suspense>
    </section>
  );
}
