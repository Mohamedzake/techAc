// import FAQSection from "@/components/FAQSection";
// import FeatureCards from "@/components/FeatureCards";
// import Hero from "@/components/Hero";
// import LatestCourses from "@/components/LatestCourses";

// export default function Home() {
//   return (
//     <div>
//       <Hero /> <FeatureCards /> <FAQSection />
//       <LatestCourses />
//     </div>
//   );
// }
import FAQSection from "@/components/FAQSection";
import FeatureCards from "@/components/FeatureCards";
import Hero from "@/components/Hero";
import LatestCourses from "@/components/LatestCourses";

export default function Home() {
  return (
    <div>
      {" "}
      <div id="home">
        <Hero />
      </div>
      <div id="services">
        <FeatureCards />
      </div>
      <div id="about">
        <FAQSection />
      </div>
      <div id="courses">
        <LatestCourses />
      </div>
      <div id="contactus">{/* Contact Us Section */}</div>
    </div>
  );
}
