import ContactForm from "./sections/Contact/Contact";
import Experience from "./sections/Experience/Experience";
import Hero from "./sections/Hero/Hero";
import Nav from "./sections/Nav/Nav";
import Project from "./sections/Projects/Project";
import Services from "./sections/ServiceSection/Services";
import SkillsSection from "./sections/Skills/SkillsSection";

export default function App() {
  return (
    <div className="bg-fgm-black min-h-screen">
      <Nav />
      <Hero />
      <Services />
      <Experience />
      <Project />
      <SkillsSection />
      <ContactForm />
      <h1>Hello World</h1>
    </div>
  );
}
