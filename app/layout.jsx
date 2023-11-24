// "use client";

import { Poppins } from "next/font/google";
import "./globals.css";
import ThemeContextProvider from "../context/theme-context";
import Header from "../components/Header";
import AuthProvider from "@/components/AuthProvider";
import { usePathname } from "next/navigation";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

const disableNavbar = ["/login", "/register", "/admin"];

// export const metadata = {
//   title: "Astronesia",
//   description: "Astronesia Elementary School",
// };

export default function RootLayout({ children }) {
  // const pathname = usePathname();
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={poppins.className} suppressHydrationWarning={true}>
        <ThemeContextProvider>
          {/* {!disableNavbar.includes(pathname) && <Header />} */}
          <Header/>
          {children}
        </ThemeContextProvider>
      </body>
    </html>
  );
}
