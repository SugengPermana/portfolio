import ShinyText from "../components/ui/ShinyText";
import CvResume from "../components/ui/CvResume";

const Resume = () => {
  return (
    <section id="resume" className="w-full max-w-5xl mx-auto py-10  px-6">
      <div className="transition-all duration-1000 ease-out transform opacity-100 translate-y-0 ">
        <div className="text-center mb-20">
          {/* judul Resume */}
          <ShinyText
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-linear-to-r from-purple-500/10 to-blue-500/10 border border-primary backdrop-blur-sm mb-6 group hover:scale-105 transition-transform duration-300"
            text="✨ Resume "
            speed={2}
            delay={1}
            color="#a600ff"
            shineColor="#e1ff00"
            spread={110}
            direction="left"
            yoyo={false}
            pauseOnHover={false}
            disabled={false}
          />
          <h2 className="text-3xl md:text-5xl font-bold mb-6 ">
            Education &{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-blue-500">
              Experience
            </span>
          </h2>
          <p className="text-gray-400 md:text-xl max-w-2xl mx-auto">
            Academic journey and professional experiences that shaped my
            expertise.
          </p>
        </div>
      </div>
      {/* cv resume */}
      <div>
        <CvResume />
      </div>
    </section>
  );
};

export default Resume;
