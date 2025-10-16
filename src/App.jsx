import ContactForm from "./sections/Contact/Contact";
import Experience from "./sections/Experience/Experience";
import Hero from "./sections/Hero/Hero";
import Nav from "./sections/Nav/Nav";
import Project from "./sections/Projects/Project";
import Services from "./sections/ServiceSection/Services";
import SkillsSection from "./sections/Skills/SkillsSection";

export default function App() {
  return (
    <div className="bg-fgm-black">
      <Nav />
      <div className="w-full lg:flex lg:pt-[8%] h-screen ">
        <div className=" flex justify-center lg:w-[40%] lg:sticky lg:top-[10%] h-fit">
          <Hero />
        </div>
        <div
          className="lg:w-[60%] h-screen overflow-y-scroll "
          style={{
            scrollbarWidth: "none", // Firefox
            msOverflowStyle: "none", // IE and Edge
          }}
        >
          <Services />
          <Experience />
          <Project />
          <SkillsSection />
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
