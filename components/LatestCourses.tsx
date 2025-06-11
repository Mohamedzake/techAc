// "use client";

// import React, { useState } from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";

// const courses = [
//   {
//     title: "Learn Web Design",
//     price: "$160",
//     category: "Webdesign",
//     instructor: "Steilo Blair",
//     imageUrl: "/1.jpg",
//   },
//   {
//     title: "Web Development Tips",
//     price: "$340",
//     category: "Development",
//     instructor: "Cindy Walker",
//     imageUrl: "/1.jpg",
//   },
//   {
//     title: "Latest Web Trends",
//     price: "$640",
//     category: "Wordpress",
//     instructor: "David Hudson",
//     imageUrl: "/1.jpg",
//   },
//   {
//     title: "Learn Web Design",
//     price: "$160",
//     category: "Webdesign",
//     instructor: "Steilo Blair",
//     imageUrl: "/1.jpg",
//   },
//   {
//     title: "Web Development Tips",
//     price: "$340",
//     category: "Webdesign",
//     instructor: "Cindy Walker",
//     imageUrl: "/1.jpg",
//   },
//   {
//     title: "Latest Web Trends",
//     price: "$640",
//     category: "Wordpress",
//     instructor: "David Hudson",
//     imageUrl: "/1.jpg",
//   },
// ];

// const categories = ["All", "Webdesign", "Development", "Wordpress"];

// const LatestCourses: React.FC = () => {
//   const [selectedCategory, setSelectedCategory] = useState("All");

//   const filteredCourses =
//     selectedCategory === "All"
//       ? courses
//       : courses.filter((course) => course.category === selectedCategory);

//   return (
//     <div className="w-full bg-gradient-to-b from-white to-amber-100 py-28">
//       <h2 className="text-3xl font-bold text-center mb-8 text-slate-800">
//         🎓 Latest Courses
//       </h2>

//       <div className="flex justify-center gap-4 flex-wrap mb-10">
//         {categories.map((cat) => (
//           <button
//             key={cat}
//             onClick={() => setSelectedCategory(cat)}
//             className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300
//               ${
//                 selectedCategory === cat
//                   ? "bg-blue-600 text-white shadow-lg"
//                   : "bg-white text-blue-600 border border-blue-600 hover:bg-blue-100"
//               }`}
//           >
//             {cat}
//           </button>
//         ))}
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
//         {filteredCourses.map((course, index) => (
//           <motion.div
//             whileHover={{ scale: 1.03 }}
//             transition={{ duration: 0.3 }}
//             key={index}
//             className="bg-white rounded-2xl shadow-xl overflow-hidden"
//           >
//             <Image
//               src={course.imageUrl}
//               alt={course.title}
//               width={400}
//               height={220}
//               className="w-full h-52 object-cover"
//             />
//             <div className="p-5">
//               <h3 className="text-xl font-semibold text-slate-800">
//                 {course.title}
//               </h3>
//               <p className="text-blue-600 text-sm mt-1">{course.category}</p>
//               <p className="text-gray-700 text-lg mt-2 font-bold">
//                 {course.price}
//               </p>
//               <p className="text-sm text-gray-500 mt-1">
//                 👨‍🏫 {course.instructor}
//               </p>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default LatestCourses;
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const courses = [
  {
    title: "أساسيات تطوير الواجهات الأمامية",
    price: "$160",
    category: "تطوير الويب",
    instructor: "أحمد خالد",
    imageUrl: "/1.jpg",
  },
  {
    title: "JavaScript نصائح متقدمة في ",
    price: "$340",
    category: "برمجة",
    instructor: "سارة عماد",
    imageUrl: "/1.jpg",
  },
  {
    title: "React.js بناء موقع باستخدام ",
    price: "$640",
    category: "React",
    instructor: "محمد زين",
    imageUrl: "/1.jpg",
  },
  {
    title: "Node.js تطوير تطبيقات باستخدام ",
    price: "$280",
    category: "Back-End",
    instructor: "ليلى فؤاد",
    imageUrl: "/1.jpg",
  },
  {
    title: "MongoDB تصميم قواعد البيانات باستخدام ",
    price: "$420",
    category: "قواعد البيانات",
    instructor: "كريم يوسف",
    imageUrl: "/1.jpg",
  },
  {
    title: "TypeScript دورة شاملة في ",
    price: "$520",
    category: "برمجة",
    instructor: "مروان أحمد",
    imageUrl: "/1.jpg",
  },
];

const categories = [
  "الكل",
  "تطوير الويب",
  "برمجة",
  "React",
  "Back-End",
  "قواعد البيانات",
];

const LatestCourses: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("الكل");

  const filteredCourses =
    selectedCategory === "الكل"
      ? courses
      : courses.filter((course) => course.category === selectedCategory);

  return (
    <div className="w-full bg-gradient-to-b from-white to-amber-100 py-28">
      <h2 className="text-3xl font-bold text-center mb-8 text-slate-800">
        🎓 أحدث الدورات في مجال البرمجة والتقنية
      </h2>

      <div className="flex justify-center gap-4 flex-wrap mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 
              ${
                selectedCategory === cat
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-white text-blue-600 border border-blue-600 hover:bg-blue-100"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {filteredCourses.map((course, index) => (
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            key={index}
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            <Image
              src={course.imageUrl}
              alt={course.title}
              width={400}
              height={220}
              className="w-full h-52 object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-slate-800">
                {course.title}
              </h3>
              <p className="text-blue-600 text-sm mt-1">{course.category}</p>
              <p className="text-gray-700 text-lg mt-2 font-bold">
                {course.price}
              </p>
              <p className="text-sm text-gray-500 mt-1">
                👨‍🏫 {course.instructor}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default LatestCourses;
