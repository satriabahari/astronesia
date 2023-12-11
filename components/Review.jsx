import React from "react";
import SectionHeading from "./SectionHeading";
import { reviews } from "../lib/data";
import Carousel from "./Carousel";
import { motion } from "framer-motion";

export default function Review() {
  return (
    <section id="review" className="md:pb-30 scroll-mt-36 pb-24">
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, delay: 1 }}
      >
        <SectionHeading>What Others Say</SectionHeading>
      </motion.div>

      <div className="md:px-20">
        <Carousel slides={reviews} />
      </div>
    </section>
  );
}
