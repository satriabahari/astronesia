import { Poppins } from "next/font/google";
import "./globals.css";
import ThemeContextProvider from "../context/theme-context";
import Header from "@/components/Header";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Astronesia",
  description: "Astronesia Elementary School",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={poppins.className} suppressHydrationWarning={true}>
        <ThemeContextProvider>
          <Header />
          {children}
        </ThemeContextProvider>
      </body>
    </html>
  );
}
