import ContactForm from "./sections/Contact/Contact";
import Experience from "./sections/Experience/Experience";
import GithubContributions from "./sections/GitHubGraph/GithubContributions";
import Hero from "./sections/Hero/Hero";
import Nav from "./sections/Nav/Nav";
import Project from "./sections/Projects/Project";
import Services from "./sections/ServiceSection/Services";
import SkillsSection from "./sections/Skills/SkillsSection";
import Team from "./sections/Team/Team";

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
          {/* <div className="flex items-center justify-center bg-fgm-black text-white px-6 py-10"> */}
          {/* <GithubContributions /> */}
          {/* </div> */}
          <SkillsSection />
          {/* <Team /> */}
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
