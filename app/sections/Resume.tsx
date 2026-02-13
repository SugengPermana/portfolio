import { SectionTitle } from "../components/SectionTitle";
import CvResume from "../components/ui/CvResume";
import TechTools from "../components/ui/TechTools";

const Resume = () => {
  return (
    <section id="resume" className="w-full max-w-5xl mx-auto py-10  px-6">
      <div className="transition-all duration-1000 ease-out transform opacity-100 translate-y-0 ">
        <div className="text-center mb-20">
          {/* judul Resume */}
          <SectionTitle text="✨ Resume " className="mb-6" />
          <h2 className="text-3xl md:text-5xl font-bold mb-6 ">
            Education &{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-blue-500">
              Experience
            </span>
          </h2>
          <p className="text-muted-foreground md:text-xl max-w-2xl mx-auto">
            Academic journey and professional experiences that shaped my
            expertise.
          </p>
        </div>
      </div>
      <div>
        {/* cv resume */}
        <CvResume />
        {/* tech tools */}
        <TechTools />
      </div>
    </section>
  );
};

export default Resume;
