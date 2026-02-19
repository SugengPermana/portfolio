import { SectionTitle } from "../components/SectionTitle";
import CvResume from "../components/ui/Resume/CvResume";
import TechTools from "../components/ui/Resume/TechTools";
import GradientText from "../components/ui/GradientText";

const Resume = () => {
  return (
    <section
      id="resume"
      className="font-poppins w-full max-w-5xl mx-auto py-10 px-6"
    >
      <div className="transition-all duration-1000 ease-out transform opacity-100 translate-y-0 ">
        <div className="text-center flex flex-col items-center justify-center mb-20">
          {/* judul Resume */}
          <div data-aos="fade-up"
              data-aos-duration="1000" data-aos-delay="100">
          <SectionTitle text=" Resume " className="mb-6" />
          </div>
          <h2 data-aos="fade-up"
              data-aos-duration="1000" data-aos-delay="200" className="text-3xl md:text-5xl font-bold mb-6 mt-10 flex gap-1">
            Education
            <GradientText colors={["#5227FF", "#FF9FFC", "#B19EEF"]}>
              Experience
            </GradientText>
          </h2>
          <p data-aos="fade-up"
              data-aos-duration="1000" data-aos-delay="300" className="text-muted-foreground md:text-xl max-w-2xl mx-auto">
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
