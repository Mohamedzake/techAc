"use client";
import { BookOutline, CreateOutline, PersonOutline } from "react-ionicons";

// const features = [
//   {
//     title: "Online Degrees",
//     description:
//       "Whenever you need free templates in HTML CSS, you just remember TemplateMo website.",
//     icon: <BookOutline color="#ffffff" height="32px" width="32px" />,
//   },
//   {
//     title: "Short Courses",
//     description:
//       "You can browse free templates based on different tags such as digital marketing, etc.",
//     icon: <CreateOutline color="#ffffff" height="32px" width="32px" />,
//   },
//   {
//     title: "Web Experts",
//     description:
//       "You can start learning HTML CSS by modifying free templates from our website too.",
//     icon: <PersonOutline color="#ffffff" height="32px" width="32px" />,
//   },
// ];
const features = [
  {
    title: "دورات برمجة متكاملة",
    description:
      ".تقدم مسارات تعليمية شاملة لتعلّم البرمجة من البداية حتى الاحتراف",
    icon: <BookOutline color="#ffffff" height="32px" width="32px" />,
  },
  {
    title: "تدريب عملي ومكثّف",
    description:
      "احترف البرمجة من خلال مشاريع تطبيقية ودورات قصيرة تركّز على المهارات العملية المطلوبة في السوق.",
    icon: <CreateOutline color="#ffffff" height="32px" width="32px" />,
  },
  {
    title: "موجّهون وخبراء تقنيون",
    description:
      "احصل على دعم وتوجيه من خبراء في مجال تطوير البرمجيات لمساعدتك في بناء مسارك المهني.",
    icon: <PersonOutline color="#ffffff" height="32px" width="32px" />,
  },
];

export default function FeatureCards() {
  return (
    <section className="py-9 px-4 pt-32 bg-white">
      <div className="max-w-7xl mx-auto grid gap-6 md:grid-cols-3">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-[#f5f3ff] p-6 rounded-3xl text-center relative mt-10 md:mt-0"
          >
            <div className="flex justify-center -mt-16 mb-4">
              <div className="bg-[#7b4eff] w-24 h-24 rounded-full flex items-center justify-center">
                {feature.icon}
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              {feature.title}
            </h3>
            <p className="text-gray-600 mb-6">{feature.description}</p>
            <button className="bg-white text-[#7b4eff] font-medium px-5 py-2 rounded-full hover:bg-gray-100 transition">
              Read More
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
