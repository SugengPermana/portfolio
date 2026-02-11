import ShinyText from "../components/ui/ShinyText";

const Projects = () => {
  return (
    <section id="projects" className="w-full">
      <div className="w-full max-w-6xl mx-auto py-20 px-6">
        <div className="transition-all duration-1000 ease-out transform opacity-100 translate-y-0 ">
          <div className="text-center mb-12">
            {/* judul Projects */}
            <ShinyText
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-linear-to-r from-purple-500/10 to-blue-500/10 border border-primary backdrop-blur-sm mb-8 group hover:scale-105 transition-transform duration-300"
              text="✨ Projects "
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
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-center">
            Featured
            <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-blue-500">
              Projects
            </span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-8 text-center">
            A collection of my best work in website development and graphic
            design.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-6 py-2.5 rounded-full text-sm font-medium flex items-center gap-2 border text-primary hover:text-white hover:bg-black border-primary shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:scale-105 transition-transform duration-300">
              All Projects
            </button>
            <button className="px-6 py-2.5 rounded-full text-sm font-medium flex items-center gap-2 border bg-white/10 text-primary hover:text-white hover:bg-linear-to-r hover:from-purple-400 hover:to-blue-500 border-primary shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:scale-105 transition-transform duration-300">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-code "
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M7 8l-4 4l4 4" />
                  <path d="M17 8l4 4l-4 4" />
                  <path d="M14 4l-4 16" />
                </svg>
              </span>
              Web Dev
            </button>
            <button className="px-6 py-2.5 rounded-full text-sm font-medium flex items-center gap-2 border bg-white/10 text-primary hover:text-white hover:bg-linear-to-r hover:from-purple-400 hover:to-blue-500 border-primary shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:scale-105 transition-transform duration-300">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-brush"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M3 21v-4a4 4 0 1 1 4 4h-4" />
                  <path d="M21 3a16 16 0 0 0 -12.8 10.2" />
                  <path d="M21 3a16 16 0 0 1 -10.2 12.8" />
                  <path d="M10.6 9a9 9 0 0 1 4.4 4.4" />
                </svg>
              </span>
              Design App
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
