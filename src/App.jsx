import ContactForm from "./sections/Contact/Contact";
import Hero from "./sections/Hero/Hero";
import Nav from "./sections/Nav/Nav";
import Project from "./sections/Projects/Project";

export default function App() {
  return (
    <div className="bg-fgm-black min-h-screen">
      <Nav />
      <Hero />
      <Project />
      <ContactForm />
      <h1>Hello World</h1>
    </div>
  );
}
