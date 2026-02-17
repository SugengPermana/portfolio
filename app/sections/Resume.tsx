import { SectionTitle } from "../components/SectionTitle";
import CvResume from "../components/ui/CvResume";
import TechTools from "../components/ui/TechTools";
import GradientText from "../components/ui/GradientText";

const Resume = () => {
  return (
    <section id="resume" className="w-full max-w-5xl mx-auto py-10 px-6">
      <div className="transition-all duration-1000 ease-out transform opacity-100 translate-y-0 ">
        <div className="text-center flex flex-col items-center justify-center mb-20">
          {/* judul Resume */}
          <SectionTitle text=" Resume " className="mb-6" />
          <h2 className="text-3xl md:text-5xl font-bold mb-6 mt-10 flex gap-1">
            Education
            <GradientText colors={["#5227FF", "#FF9FFC", "#B19EEF"]}>
              Experience
            </GradientText>
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
