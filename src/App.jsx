import Nav from "./sections/Nav/Nav";
import Project from "./sections/Projects/Project";
export default function App() {
  return (
    <div className="bg-background text-text-default min-h-screen">
      <Nav />
      <Project />
    </div>
  );
}
