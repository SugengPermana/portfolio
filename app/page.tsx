import About from "./sections/About";
import Contact from "./sections/Contact";
import Home from "./sections/Home";
import Projects from "./sections/Portfolio";
import Resume from "./sections/Resume";
import Skills from "./sections/Skills";

export default function Page() {
  return (
    <main>
      <Home />
      <About />
      <Skills />
      <Projects />
      <Resume />
      <Contact />
    </main>
  );
}
