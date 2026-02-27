import About from "./sections/About";
import Contact from "./sections/Contact";
import Home from "./sections/Home";
import Projects from "./sections/Projects";
import Resume from "./sections/Resume";

export default function Page() {
  return (
    <main className="relative w-full overflow-x-hidden">
      <div className="flex flex-col max-w-6xl mx-auto px-4 md:px-8 lg:px-10 pb-24">
        <Home />
        <About />
        <Projects />
        <Resume />
        <Contact />
      </div>
    </main>
  );
}
