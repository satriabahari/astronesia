"use client";

import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Intro from "@/components/Intro";
import Review from "@/components/Review";
import React from "react";

export default function Home() {
  return (
    <main className="relative bg-gray-50 px-4 dark:bg-gray-800 md:px-8">
      {/* <Header /> */}
      <Intro />
      <About />
      <Review />
      <Contact />
      <Footer />
    </main>
  );
}
