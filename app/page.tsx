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
import ContactUs from "@/components/ContactUs";
import FAQSection from "@/components/FAQSection";
import FeatureCards from "@/components/FeatureCards";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import InternshipOpportunities from "@/components/InternshipOpportunities";
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
      <div id="internship">
        <InternshipOpportunities />
      </div>
      <div id="contactus">
        <ContactUs />
      </div>
      <Footer />
    </div>
  );
}
