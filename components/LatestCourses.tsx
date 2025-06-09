"use client";

import React, { useState } from "react";
import Image from "next/image";

const courses = [
  {
    title: "Learn Web Design",
    price: "$160",
    category: "Webdesign",
    instructor: "Steilo Blair",
    imageUrl: "/1.jpg",
  },
  {
    title: "Web Development Tips",
    price: "$340",
    category: "Development",
    instructor: "Cindy Walker",
    imageUrl: "/1.jpg",
  },
  {
    title: "Latest Web Trends",
    price: "$640",
    category: "Wordpress",
    instructor: "David Hudson",
    imageUrl: "/1.jpg",
  },
  {
    title: "Learn Web Design",
    price: "$160",
    category: "Webdesign",
    instructor: "Steilo Blair",
    imageUrl: "/1.jpg",
  },
  {
    title: "Web Development Tips",
    price: "$340",
    category: "Development",
    instructor: "Cindy Walker",
    imageUrl: "/1.jpg",
  },
  {
    title: "Latest Web Trends",
    price: "$640",
    category: "Wordpress",
    instructor: "David Hudson",
    imageUrl: "/1.jpg",
  },
];

const LatestCourses: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredCourses =
    selectedCategory === "All"
      ? courses
      : courses.filter((course) => course.category === selectedCategory);

  return (
    <div className=" mx-auto mt-10 pt-20 bg-amber-100">
      <h2 className="text-2xl font-bold text-center">Latest Courses</h2>

      <div className="flex flex-wrap justify-center mt-5 gap-6">
        <button
          onClick={() => setSelectedCategory("All")}
          className="mx-2 bg-blue-500 text-white py-2 px-4 rounded w-32"
        >
          Show All
        </button>
        <button
          onClick={() => setSelectedCategory("Webdesign")}
          className="mx-2 bg-blue-500 text-white py-2 px-4 rounded w-32"
        >
          Webdesign
        </button>
        <button
          onClick={() => setSelectedCategory("Development")}
          className="mx-2 bg-blue-500 text-white py-2 px-4 rounded w-32"
        >
          Development
        </button>
        <button
          onClick={() => setSelectedCategory("Wordpress")}
          className="mx-2 bg-blue-500 text-white py-2 px-4 rounded w-32"
        >
          Wordpress
        </button>
      </div>

      <div className="flex justify-center mt-5 flex-wrap">
        {filteredCourses.map((course, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg m-4 p-5 ">
            <Image
              src={course.imageUrl}
              alt={course.title}
              width={320}
              height={180}
              className="rounded-t-lg"
              priority
            />
            <div className="mt-4">
              <h3 className="text-lg font-semibold">{course.title}</h3>
              <p className="text-gray-500">{course.category}</p>
              <p className="text-xl font-bold">{course.price}</p>
              <p className="text-gray-400">{course.instructor}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestCourses;
