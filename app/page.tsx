import About from "./sections/About";
import Contact from "./sections/Contact";
import Home from "./sections/Home";
import Projects from "./sections/Projects";
import Resume from "./sections/Resume";

export default function Page() {
  return (
    <main>
      <Home />
      <About />
      <Projects />
      <Resume />
      <Contact />
    </main>
  );
}
