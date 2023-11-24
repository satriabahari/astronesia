import Accordion from "@/components/Accordion";
import SectionHeading from "@/components/SectionHeading";
import { getData } from "@/utils/api";

export default async function FaqPage() {
  const faq = await getData("/faqs");

  return (
    <section className="flex h-auto flex-col items-center justify-center bg-gray-50 pt-28 pb-[4.7rem] dark:bg-gray-800 md:h-auto md:px-44">
      <p className="text-xl text-gray-700 dark:text-gray-50 md:text-2xl">
        Welcome to,
      </p>
      <SectionHeading>Frequently Ask Questions</SectionHeading>
      <p className="mb-8 w-3/4 text-center text-gray-600 dark:text-gray-400 md:mb-12">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis commodi
        cumque minima voluptas quod laboriosam deleniti unde repudiandae
        recusandae totam.
      </p>
      <div className="flex flex-col gap-y-4 h-auto justify-center items-center w-full">
        {faq.data.map((question, index) => (
          <Accordion
            key={index}
            question={question.question}
            answer={question.answer}
          />
        ))}
      </div>
    </section>
  );
}
