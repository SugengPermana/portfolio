import Image from "next/image";

const CardAbout = () => {
  return (
    <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-none">
      <div className="transition-all duration-1000 ease-out transform opacity-100 translate-y-0 ">
        <div className="group rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-300 relative overflow-hidden min-h-[400px]">
          <div className="absolute inset-0 z-0">
            <Image
              src="/afront.png"
              sizes="2"
              alt="FrontEnd Developer"
              loading="lazy"
              fill
              className="w-full h-full object-cover object-center opacity-70 transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="absolute inset-0 z-10 bg-linear-to-b from-neutral-950 via-neutral-950/70 to-transparent"></div>
          {/* judul card */}
          <div className="relative z-20 p-8 flex flex-col h-full justify-start">
            <h3 className="text-3xl font-bold text-white mb-4 drop-shadow-md">
              Front End Dev
            </h3>
            {/* tools card */}
            <div className="flex flex-wrap gap-2 mb-6 ">
              <span className="px-3 py-1.5 text-sm font-medium rounded-lg bg-neutral-900/60 text-gray-200 border border-white/10 backdrop-blur-md">
                React
              </span>
              <span className="px-3 py-1.5 text-sm font-medium rounded-lg bg-neutral-900/60 text-gray-200 border border-white/10 backdrop-blur-md">
                Javascript
              </span>
              <span className="px-3 py-1.5 text-sm font-medium rounded-lg bg-neutral-900/60 text-gray-200 border border-white/10 backdrop-blur-md">
                Tailwind CSS
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed text-lg mb-8 drop-shadow-sm font-medium">
              I specialize in frontend development using React, Tailwind CSS,
              building a website with responsive UI/UX design on any display.
            </p>
          </div>
        </div>
      </div>
      <div className="transition-all duration-1000 ease-out transform opacity-100 translate-y-0 ">
        <div className="group rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-300 relative overflow-hidden min-h-[400px]">
          <div className="absolute inset-0 z-0">
            <Image
              src="/abe.png"
              alt="Backend Developer"
              loading="lazy"
              fill
              sizes="2"
              className="w-full h-full object-cover object-center opacity-70 transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="absolute inset-0 z-10 bg-linear-to-b from-neutral-950 via-neutral-950/70 to-transparent"></div>
          {/* judul card */}
          <div className="relative z-20 p-8 flex flex-col h-full justify-start">
            <h3 className="text-3xl font-bold text-white mb-4 drop-shadow-md">
              Back End Dev
            </h3>
            {/* tools card */}
            <div className="flex flex-wrap gap-2 mb-6 ">
              <span className="px-3 py-1.5 text-sm font-medium rounded-lg bg-neutral-900/60 text-gray-200 border border-white/10 backdrop-blur-md">
                Node.js
              </span>
              <span className="px-3 py-1.5 text-sm font-medium rounded-lg bg-neutral-900/60 text-gray-200 border border-white/10 backdrop-blur-md">
                Express.js
              </span>
              <span className="px-3 py-1.5 text-sm font-medium rounded-lg bg-neutral-900/60 text-gray-200 border border-white/10 backdrop-blur-md">
                Php
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed text-lg mb-8 drop-shadow-sm font-medium">
              I specialize in backend development using Node.js, Express.js, Php
              building a website so can connect to database and server.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardAbout;
