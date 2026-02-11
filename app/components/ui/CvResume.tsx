import { div } from "framer-motion/client";

const CvResume = () => {
  return (
    <div>
      <div className="mb-20">
        {/* education */}
        <div className="transition-all duration-1000 ease-out transform opacity-100 translate-y-0">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-white border-b border-white/20 pb-4">
            My Education
          </h3>
        </div>
        {/* form education */}
        <div className="flex flex-col space-y-6">
          <div className="transition-all duration-1000 ease-out transform opacity-100 translate-y-0 ">
            <div className="flex flex-col md:grid md:grid-cols-[150px_350px_1fr] gap-4 md:gap-8 p-2">
              {/* tanggal */}
              <div className="text-gray-400 font-medium text-sm md:text-base pt-1">
                2024 - Present
              </div>
              {/* jurusan dan universitas */}
              <div className="flex flex-col">
                <h4 className="text-xl font-bold text-white">
                  S1 Information Technology
                </h4>
                <span className="text-gray-400 text-sm mt-1">
                  Studied at{" "}
                  <span className="text-gray-300 font-medium">
                    Universitas Pamulang
                  </span>
                </span>
              </div>
              {/* descripsi */}
              <div className="text-gray-400 text-sm leading-relaxed">
                Currently I am studying at Universitas Pamulang, Information
                Technology Department, Informatics Engineering Study Program,
                3nd Semester.
              </div>
            </div>
          </div>
        </div>
        {/* garis */}
        <div className="h-px bg-white/15 mx-2"></div>
        {/* form education 2 */}
        <div className="flex flex-col space-y-6 mt-5">
          <div className="transition-all duration-1000 ease-out transform opacity-100 translate-y-0 ">
            <div className="flex flex-col md:grid md:grid-cols-[150px_350px_1fr] gap-4 md:gap-8 p-2">
              {/* tanggal */}
              <div className="text-gray-400 font-medium text-sm md:text-base pt-1">
                2021 - 2024
              </div>
              {/* jurusan dan universitas */}
              <div className="flex flex-col">
                <h4 className="text-xl font-bold text-white">
                  Pariwisata & Perhotelan
                </h4>
                <span className="text-gray-400 text-sm mt-1">
                  Studied at{" "}
                  <span className="text-gray-300 font-medium">
                    SMK Laboratorium Indonesia
                  </span>
                </span>
              </div>
              {/* descripsi */}
              <div className="text-gray-400 text-sm leading-relaxed">
                I also graduated from SMK Laboratorium Indonesia majoring in
                Pariwisata & Perhotelan in this school I learn about public
                speaking and how to serve guests.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-20">
        {/* experience */}
        <div className="transition-all duration-1000 ease-out transform opacity-100 translate-y-0">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-white border-b border-white/20 pb-4">
            My Experience
          </h3>
        </div>
        <div className="flex flex-col space-y-6 mt-5">
          <div className="transition-all duration-1000 ease-out transform opacity-100 translate-y-0 ">
            <div className="flex flex-col md:grid md:grid-cols-[150px_350px_1fr] gap-4 md:gap-8 p-2">
              {/* tanggal */}
              <div className="text-gray-400 font-medium text-sm md:text-base pt-1">
                2025 - Present
              </div>
              {/* jurusan dan universitas */}
              <div className="flex flex-col">
                <h4 className="text-xl font-bold text-white">
                  Freelance As Web Developer
                </h4>
                <span className="text-gray-400 text-sm mt-1">
                  Work{" "}
                  <span className="text-gray-300 font-medium">EveryWhere</span>
                </span>
              </div>
              {/* descripsi */}
              <div className="text-gray-400 text-sm leading-relaxed">
                I work as a freelance web developer, creating websites for
                clients and helping them with their web development needs.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CvResume;
