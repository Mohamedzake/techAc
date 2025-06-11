// "use client";

// import React from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";

// const internships = [
//   {
//     title: "Frontend Internship",
//     duration: "3 Months",
//     type: "Remote",
//     company: "TechVision",
//     logo: "/1.jpg",
//   },
//   {
//     title: "Backend Developer Intern",
//     duration: "2 Months",
//     type: "Onsite",
//     company: "CodeForge",
//     logo: "/1.jpg",
//   },
//   {
//     title: "Mobile App Intern",
//     duration: "4 Months",
//     type: "Hybrid",
//     company: "Appify",
//     logo: "/1.jpg",
//   },
//   {
//     title: "Frontend Internship",
//     duration: "3 Months",
//     type: "Remote",
//     company: "TechVision",
//     logo: "/1.jpg",
//   },
// ];

// const InternshipOpportunities: React.FC = () => {
//   return (
//     <div className="w-full bg-slate-100 py-28 ">
//       <h2 className="text-3xl font-bold text-center mb-10 text-slate-800">
//         💼 Internship Opportunities
//       </h2>

//       <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
//         {internships.map((intern, index) => (
//           <motion.div
//             whileHover={{ scale: 1.03 }}
//             transition={{ duration: 0.3 }}
//             key={index}
//             className="bg-white rounded-2xl shadow-md p-6 flex items-center gap-4"
//           >
//             <div className="relative w-16 h-16">
//               <Image
//                 src={intern.logo}
//                 alt={intern.company}
//                 fill
//                 className="object-contain"
//               />
//             </div>

//             <div>
//               <h3 className="text-lg font-semibold text-slate-800">
//                 {intern.title}
//               </h3>
//               <p className="text-sm text-gray-500">{intern.company}</p>
//               <p className="text-sm mt-1">
//                 ⏱ {intern.duration} • 📍 {intern.type}
//               </p>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default InternshipOpportunities;

"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const internships = [
  {
    title: "Frontend Developer Internship",
    duration: "3 شهور",
    type: "عن بعد",
    company: "تك فيجن",
    logo: "/1.jpg",
  },
  {
    title: "Backend Developer Internship",
    duration: "2 شهور",
    type: "في المقر",
    company: "كود فورج",
    logo: "/1.jpg",
  },
  {
    title: "تدريب تطبيقات الموبايل",
    duration: "4 شهور",
    type: "هجين",
    company: "أبيفاى",
    logo: "/1.jpg",
  },
  {
    title: "تدريب تصميم واجهات",
    duration: "3 شهور",
    type: "عن بعد",
    company: "تك فيجن",
    logo: "/1.jpg",
  },
];

const InternshipOpportunities: React.FC = () => {
  return (
    <div className="w-full bg-gradient-to-b from-gray-50 to-blue-100 py-24">
      <h2 className="text-5xl font-extrabold text-center text-blue-900 mb-12">
        💼 فرص التدريب
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto px-6">
        {internships.map((intern, index) => (
          <motion.div
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 30px rgba(0, 0, 0, 0.15)",
            }}
            transition={{ duration: 0.3 }}
            key={index}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 flex flex-col items-center gap-6 border-t-4 border-blue-500"
          >
            <div className="relative w-24 h-24 flex-shrink-0">
              <Image
                src={intern.logo}
                alt={intern.company}
                fill
                className="object-cover rounded-full border-4 border-blue-500"
              />
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-800 hover:text-blue-700 transition duration-200">
                {intern.title}
              </h3>
              <p className="text-base text-gray-600 mt-1">
                🏢 {intern.company}
              </p>
              <p className="text-base text-gray-500 mt-2">
                ⏳ {intern.duration} | 📍 {intern.type}
              </p>
              <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300 shadow-md hover:shadow-lg">
                التقديم الآن
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default InternshipOpportunities;
