import React from "react";
import SectionHeading from "./SectionHeading";
import { reviews } from "../lib/data";
import Carousel from "./Carousel";

export default function Review() {
  return (
    <section id="review" className="md:pb-30 scroll-mt-36 pb-24">
      <SectionHeading>What Others Say</SectionHeading>

      <div className="md:px-20">
        <Carousel slides={reviews} />
      </div>
    </section>
  );
}
