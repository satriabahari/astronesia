import ButtonBack from "@/components/ButtonBack";
import SectionHeading from "@/components/SectionHeading";
import { enrollments } from "@/lib/data";

export default function Admission() {
  return (
    <section className="flex flex-col gap-y-4 bg-gray-50 px-4 pb-16 pt-32 text-gray-800 dark:bg-gray-800 dark:text-gray-50 md:gap-y-8 md:px-48">
      <SectionHeading>Enrollment Procedure</SectionHeading>

      <p className="">
        Although admissions visits are limited based on appointment, the ACS
        Jakarta Admissions team continues to assist you virtually.
      </p>
      <p className="">
        All applications and enquiries regarding admission should be directed to
        the admissions office or you can reach us at :
      </p>

      <ul className="list-disc px-8">
        {enrollments.map((enrollment, index) => (
          <li key={index} className="mb-4 list-disc">
            {enrollment.procedure}
          </li>
        ))}
      </ul>
    </section>
  );
}
