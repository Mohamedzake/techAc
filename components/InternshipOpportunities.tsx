"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const internships = [
  {
    title: "Frontend Internship",
    duration: "3 Months",
    type: "Remote",
    company: "TechVision",
    logo: "/1.jpg",
  },
  {
    title: "Backend Developer Intern",
    duration: "2 Months",
    type: "Onsite",
    company: "CodeForge",
    logo: "/1.jpg",
  },
  {
    title: "Mobile App Intern",
    duration: "4 Months",
    type: "Hybrid",
    company: "Appify",
    logo: "/1.jpg",
  },
  {
    title: "Frontend Internship",
    duration: "3 Months",
    type: "Remote",
    company: "TechVision",
    logo: "/1.jpg",
  },
];

const InternshipOpportunities: React.FC = () => {
  return (
    <div className="w-full bg-slate-100 py-20 ">
      <h2 className="text-3xl font-bold text-center mb-10 text-slate-800">
        💼 Internship Opportunities
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
        {internships.map((intern, index) => (
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 flex items-center gap-4"
          >
            <div className="relative w-16 h-16">
              <Image
                src={intern.logo}
                alt={intern.company}
                fill
                className="object-contain"
              />
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-800">
                {intern.title}
              </h3>
              <p className="text-sm text-gray-500">{intern.company}</p>
              <p className="text-sm mt-1">
                ⏱ {intern.duration} • 📍 {intern.type}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default InternshipOpportunities;
