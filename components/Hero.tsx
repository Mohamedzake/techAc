/* eslint-disable @typescript-eslint/no-unused-vars */
// "use client";

// import { useState } from "react";
// import Image from "next/image";
// type Slide = {
//   title: string;
//   description: string;
//   image: string;
// };
// const slides: Slide[] = [
//   {
//     title: "With Techify Teachers, Everything Is Easier",
//     description:
//       "Techify is free CSS template designed by TemplateMo for online educational related websites. This layout is based on the famous Bootstrap v5.3.0 framework.",
//     image: "/1.jpg",
//   },
//   {
//     title: " Teachers, Everything Is Easier",
//     description:
//       "Techify is free CSS template designed by TemplateMo for online educational related websites. This layout is based on the famous Bootstrap v5.3.0 framework.",
//     image: "/1.jpg",
//   },
//   {
//     title: " Everything Is Easier",
//     description:
//       "Techify is free CSS template designed by TemplateMo for online educational related websites. This layout is based on the famous Bootstrap v5.3.0 framework.",
//     image: "/1.jpg",
//   },
// ];

// export default function HeroSlider() {
//   const [current, setCurrent] = useState(0);
//   const length = slides.length;

//   const nextSlide = () => setCurrent((prev) => (prev + 1) % length);
//   const prevSlide = () => setCurrent((prev) => (prev - 1 + length) % length);

//   return (
//     <div className="relative w-full h-[90vh] bg-[#8854d0] overflow-hidden">
//       <div className="absolute inset-0 transition-opacity duration-700 ease-in-out">
//         <Image
//           src={slides[current].image}
//           alt="Hero Background"
//           layout="fill"
//           objectFit="cover"
//           // className="rounded-[2rem]"
//         />
//         <div className="absolute inset-0 bg-black/20 z-0" />
//         {/* <div className="absolute inset-0 bg-black  rounded-[2rem]" /> */}
//       </div>

//       <div className="relative z-10 flex flex-col justify-center items-start h-full px-5 md:px-10 max-w-5xl mx-auto text-white">
//         <span className="mb-4 px-5 py-1  bg-opacity-20 rounded-full text-sm font-medium uppercase bg-green-600">
//           Our Courses
//         </span>
//         <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
//           {slides[current].title}
//         </h1>
//         <p className="text-md md:text-lg mb-6 max-w-xl">
//           {slides[current].description}
//         </p>
//         <div className="flex gap-4">
//           {/* <button className="  md:font-semibold py-2 px-6 rounded-full shadow-md bg-[#8854d0]  hover:bg-[#553e72] transition">
//             Request Demo
//           </button> */}
//           <button className="flex items-center gap-2 py-2 px-5 border border-white rounded-full hover:bg-white hover:text-[#8854d0] transition">
//             <div className="bg-white text-[#8854d0] rounded-full py-2 px-3 ">
//               ▶
//             </div>
//             What&apos;s Techify?
//           </button>
//         </div>
//       </div>

//       {/* Arrows */}
//       <button
//         onClick={prevSlide}
//         className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white rounded-full py-3 px-4 z-20"
//       >
//         ←
//       </button>
//       <button
//         onClick={nextSlide}
//         className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white rounded-full py-3 px-4 z-20"
//       >
//         →
//       </button>
//     </div>
//   );
// }
"use client";

import { useState } from "react";
import Image from "next/image";

type Slide = {
  title: string;
  description: string;
  image: string;
};

const slides: Slide[] = [
  {
    title: "Techify ابدأ رحلتك في تعلّم البرمجة مع ",
    description:
      " توفر لك دورات تعليمية في جميع مجالات البرمجة، من الأساسيات حتى التقدم، من خلال محتوى مبسط وعملي، ودعم مخصص يساعدك على الوصول إلى مستوى احترافي",
    image: "/1.jpg",
  },
  {
    title: "مع Techify، تعلّم البرمجة أصبح أسهل",
    description:
      "توفر لك دورات تعليمية في جمبع مجالات البرمجة باستخدام أحدث الأدوات مثل Bootstrap وReact.",
    image: "/1.jpg",
  },
  {
    title: "Techify منصتك لتعلّم البرمجة الحديثة",
    description:
      "تعلم أساسيات البرمجة وأحدث تقنيات تطوير الويب مثل JavaScript وReact وNode.js من خلال دروس مبسطة وعملية عبر منصة Techify (تِكفايد).",
    image: "/1.jpg",
  },
  {
    title: "ابدأ رحلتك في عالم التقنية مع Techify",
    description:
      "سجّل الآن في Techify (تِكفايد) وابدأ تعلّم البرمجة من الصفر حتى الاحتراف بمحتوى شامل ودعم مخصص.",
    image: "/1.jpg",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  // const nextSlide = () => setCurrent((prev) => (prev + 1) % length);
  // const prevSlide = () => setCurrent((prev) => (prev - 1 + length) % length);

  return (
    <div className="relative w-full h-[90vh] bg-[#8854d0] overflow-hidden">
      <div className="absolute inset-0 transition-opacity duration-700 ease-in-out">
        <Image
          src={slides[current].image}
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 bg-black/20 z-0" />
      </div>

      <div className="relative z-10 flex flex-col justify-center items-start h-full px-5 md:px-10 max-w-5xl mx-auto text-white">
        <span className="mb-4 px-5 py-1 bg-opacity-20 rounded-full text-sm font-medium uppercase bg-green-600">
          دوراتنا التعليمية
        </span>
        <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
          {slides[current].title}
        </h1>
        <p className="text-md md:text-lg mb-6 max-w-xl">
          {slides[current].description}
        </p>
        <div className="flex gap-4">
          <button className="flex items-center gap-2 py-2 px-5 border border-white rounded-full hover:bg-white hover:text-[#8854d0] transition">
            <div className="bg-white text-[#8854d0] rounded-full py-2 px-3">
              ▶
            </div>
            ؟ Techify ما هي
          </button>
        </div>
      </div>

      {/* Arrows */}
      {/* <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white rounded-full py-3 px-4 z-20"
      >
        ←
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white rounded-full py-3 px-4 z-20"
      >
        →
      </button> */}
    </div>
  );
}
