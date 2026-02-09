import ShinyText from "../components/ShinyText";

const About = () => {
  return (
    <section className="w-full mb-20">
      <div className="relative w-full max-w-7xl mx-auto py-32 px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          {/* ini bg kiri kanan */}
          <div className="absolute top-1/4 -left-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 pt-20">
          <div className="transition-all duration-1000 ease-out transform opacity-100 translate-y-0 ">
            <div className="text-center mb-10">
              {/* text judul */}
              <ShinyText
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-linear-to-r from-purple-500/10 to-blue-500/10 border border-primary backdrop-blur-sm mb-8 group hover:scale-105 transition-transform duration-300"
                text="✨ About Me "
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
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-center flex flex-col">
              {/* text sub judul */}
              <span className="text-primary">
                Transforming ideas into impactful
              </span>
              <span className="text-primary">Web Experiences</span>
              <span className="text-primary">through technology</span>
            </h1>
            <div className="flex flex-wrap justify-center gap-6 md:gap-12 mt-12 py-8 px-4">
              <div className="group flex flex-col items-center justify-center relative">
                {/* bg and border */}
                <div className="absolute inset-0 bg-neutral-900 rounded-2xl -z-10 shadow-2xl shadow-purple-900/20"></div>
                <div className="absolute inset-0 rounded-2xl border border-white/10 -z-10"></div>
                {/* 2+ */}
                <div className="relative p-8 text-center">
                  <div className="relative">
                    <span className="text-5xl md:text-6xl font-bold bg-linear-to-r from-white via-white to-gray-300 bg-clip-text text-transparent mb-3 block group-hover:scale-110 transition-transform duration-500">
                      2+
                    </span>
                    <div className="absolute inset-0 bg-linear-to-r from-purple-500/20 to-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                  </div>
                  {/* happy client */}
                  <div className="flex items-center gap-2 justify-center">
                    <div className="w-1 h-1 bg-linear-to-r from-purple-400 to-blue-400 rounded-full"></div>
                    <span className="text-sm font-medium text-gray-300 uppercase tracking-wider">
                      Fun Clients
                    </span>
                  </div>
                </div>
              </div>
              <div className="group flex flex-col items-center  relative justify-center">
                {/* bg and border  */}
                <div className="absolute inset-0 bg-neutral-900 rounded-2xl -z-10 shadow-2xl shadow-purple-900/20"></div>
                <div className="absolute inset-0 rounded-2xl border border-white/10 -z-10"></div>
                {/* 2+ */}
                <div className="relative p-8 text-center">
                  <div className="relative">
                    <span className="text-5xl md:text-6xl font-bold bg-linear-to-r from-white via-white to-gray-300 bg-clip-text text-transparent mb-3 block group-hover:scale-110 transition-transform duration-500">
                      10+
                    </span>
                    <div className="absolute inset-0 bg-linear-to-r from-purple-500/20 to-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                  </div>
                  {/* happy client */}
                  <div className="flex items-center gap-2 justify-center">
                    <div className="w-1 h-1 bg-linear-to-r from-purple-400 to-blue-400 rounded-full"></div>
                    <span className="text-sm font-medium text-gray-300 uppercase tracking-wider">
                      Projects
                    </span>
                  </div>
                </div>
              </div>
              <div className="group flex flex-col items-center  relative justify-center">
                {/* bg and border  */}
                <div className="absolute inset-0 bg-neutral-900 rounded-2xl -z-10 shadow-2xl shadow-purple-900/20"></div>
                <div className="absolute inset-0 rounded-2xl border border-white/10 -z-10"></div>
                {/* 2+ */}
                <div className="relative p-8 text-center">
                  <div className="relative">
                    <span className="text-5xl md:text-6xl font-bold bg-linear-to-r from-white via-white to-gray-300 bg-clip-text text-transparent mb-3 block group-hover:scale-110 transition-transform duration-500">
                      1+
                    </span>
                    <div className="absolute inset-0 bg-linear-to-r from-purple-500/20 to-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                  </div>
                  {/* happy client */}
                  <div className="flex items-center gap-2 justify-center">
                    <div className="w-1 h-1 bg-linear-to-r from-purple-400 to-blue-400 rounded-full"></div>
                    <span className="text-sm font-medium text-gray-300 uppercase tracking-wider">
                      Years Exp
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
