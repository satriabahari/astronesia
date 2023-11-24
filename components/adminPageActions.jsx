// import axios from "axios";
// import { useRouter } from "next/navigation";
// import React, { SyntheticEvent, useState } from "react";
// import ButtonSubmit from "./button_submit";
// import Link from "next/link";

// export default function AdminPageActions({children}) {
//   const [question, setQuestion] = useState("");
//   const [answer, setAnswer] = useState("");
//   const [isMutating, setIsMutating] = useState(false);

//   const router = useRouter();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsMutating(true);
//     await axios.post("/api/faq", {
//       question,
//       answer,
//     });
//     setIsMutating(false);
//     router.push("/admin/faq");
//     router.refresh();
//   };

//   return (
//     <section className="grid grid-rows-[10%_auto] gap-y-6 p-4">
//       <div className="flex flex-col justify-between rounded-lg bg-gray-50 px-8 py-2">
//         <h1 className="font-medium">Manage FAQ</h1>
//         <p className="text-xs font-medium">
//           <span className="text-blue-500">Admin Dashboard</span> / FAQ
//         </p>
//       </div>

//       <div className="grid grid-rows-[auto_1fr] gap-4 rounded-lg bg-gray-50 px-16 py-12">
//         <div className="text-center">
//           <h3 className=" mb-4 text-3xl font-medium">Add FAQ</h3>
//           <p className="mb-4 text-sm">
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
//             aperiam dolorum totam, ducimus impedit laborum?
//           </p>
//         </div>

//         <form className="grid grid-cols-2 gap-8" onSubmit={handleSubmit}>
//           <div className="flex flex-col">
//             <label className="mb-2 text-sm font-medium">Question</label>
//             <input
//               type="text"
//               className="rounded-sm border border-gray-300 bg-gray-50 px-2 py-2 text-sm outline-none"
//               placeholder="Question"
//               value={question}
//               onChange={(e) => setQuestion(e.target.value)}
//             />
//           </div>
//           <div className="flex flex-col">
//             <label className="mb-2 text-sm font-medium">Answer</label>
//             <input
//               type="text"
//               className="rounded-sm border border-gray-300 bg-gray-50 px-2 py-2 text-sm outline-none"
//               placeholder="Answer"
//               value={answer}
//               onChange={(e) => setAnswer(e.target.value)}
//             />
//           </div>
//           <div>
//             <ButtonSubmit isMutating={isMutating} text="Submit" />
//             <button className="rounded-sm border border-gray-500 bg-gray-50 px-6 py-2 text-blue-500">
//               <Link href="/admin/faq">Cancel</Link>
//             </button>
//           </div>
//         </form>
//       </div>
//     </section>
//   );
// }
