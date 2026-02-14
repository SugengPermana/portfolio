import { techTools } from "../../lib/data";

const TechTools = () => {
  return (
    <div>
      {/* title */}
      <div className="transition-all duration-1000 ease-out transform opacity-100 translate-y-0 ">
        <h3 className="text-2xl md:text-3xl font-bold mb-8 text-white border-b border-white/20 pb-4">
          Technologies I’ve worked with
        </h3>
      </div>
      {/* tech tools */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {techTools.map((tool, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay={((index % 5) + 1) * 100}
            className="flex flex-col items-center justify-center p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/20 cursor-pointer group"
          >
            <div className="mb-4 transition-all duration-300 group-hover:scale-110 filter grayscale group-hover:grayscale-0">
              <tool.icon className="h-18 w-18" stroke={2} />
            </div>
            <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors duration-300">
              {tool.name}
            </span>
            {/* progress bar */}
            <div className="w-full mt-4 bg-white/10 rounded-full h-2 overflow-hidden">
              <div
                className="bg-linear-to-r from-blue-500 to-purple-500 h-full rounded-full"
                style={{ width: `${tool.progress}%` }}
                data-aos="slide-right"
                data-aos-duration="1000"
                data-aos-delay={((index % 5) + 1) * 200}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechTools;
