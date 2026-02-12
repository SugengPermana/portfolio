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
        {/* card 1 */}
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="100"
          className="flex flex-col items-center justify-center p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/20 cursor-pointer group"
        >
          <div className="mb-4 transition-all duration-300 group-hover:scale-110 filter grayscale group-hover:grayscale-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-18 w-18"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M9 15v-6l7.745 10.65a9 9 0 1 1 2.255 -1.993" />
              <path d="M15 12v-3" />
            </svg>
          </div>
          <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors duration-300">
            Next Js
          </span>
        </div>
        {/* card 2 */}
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
          className="flex flex-col items-center justify-center p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/20 cursor-pointer group"
        >
          <div className="mb-4 transition-all duration-300 group-hover:scale-110 filter grayscale group-hover:grayscale-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-18 w-18"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M6.357 9c-2.637 .68 -4.357 1.845 -4.357 3.175c0 2.107 4.405 3.825 9.85 3.825c.74 0 1.26 -.039 1.95 -.097" />
              <path d="M9.837 15.9c-.413 -.596 -.806 -1.133 -1.18 -1.8c-2.751 -4.9 -3.488 -9.77 -1.63 -10.873c1.15 -.697 3.047 .253 4.974 2.254" />
              <path d="M6.429 15.387c-.702 2.688 -.56 4.716 .56 5.395c1.783 1.08 5.387 -1.958 8.043 -6.804c.36 -.67 .683 -1.329 .968 -1.978" />
              <path d="M12 18.52c1.928 2 3.817 2.95 4.978 2.253c1.85 -1.102 1.121 -5.972 -1.633 -10.873c-.384 -.677 -.777 -1.204 -1.18 -1.8" />
              <path d="M17.66 15c2.612 -.687 4.34 -1.85 4.34 -3.176c0 -2.11 -4.408 -3.824 -9.845 -3.824c-.747 0 -1.266 .029 -1.955 .087" />
              <path d="M8 12c.285 -.66 .607 -1.308 .968 -1.978c2.647 -4.844 6.253 -7.89 8.046 -6.801c1.11 .679 1.262 2.706 .56 5.393" />
              <path d="M12.26 12.015h-.01c-.01 .13 -.12 .24 -.26 .24a.263 .263 0 0 1 -.25 -.26c0 -.14 .11 -.25 .24 -.25h-.01c.13 -.01 .25 .11 .25 .24" />
            </svg>
          </div>
          <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors duration-300">
            React
          </span>
        </div>

        {/* card 3 */}
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
          className="flex flex-col items-center justify-center p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/20 cursor-pointer group"
        >
          <div className="mb-4 transition-all duration-300 group-hover:scale-110 filter grayscale group-hover:grayscale-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-18 w-18"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M3 17l8 5l7 -4v-8l-4 -2.5l4 -2.5l4 2.5v4l-11 6.5l-4 -2.5v-7.5l-4 -2.5l0 11.5" />
              <path d="M11 18v4" />
              <path d="M7 15.5l7 -4" />
              <path d="M14 7.5v4" />
              <path d="M14 11.5l4 2.5" />
              <path d="M11 13v-7.5l-4 -2.5l-4 2.5" />
              <path d="M7 8l4 -2.5" />
              <path d="M18 10l4 -2.5" />
            </svg>
          </div>
          <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors duration-300">
            Laravel
          </span>
        </div>
        {/* card 4 */}
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="400"
          className="flex flex-col items-center justify-center p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/20 cursor-pointer group"
        >
          <div className="mb-4 transition-all duration-300 group-hover:scale-110 filter grayscale group-hover:grayscale-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-18 w-18"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5l16 0" />
              <path d="M7.5 8h3v8l-2 -1" />
              <path d="M16.5 8h-2.5a.5 .5 0 0 0 -.5 .5v3a.5 .5 0 0 0 .5 .5h1.423a.5 .5 0 0 1 .495 .57l-.418 2.93l-2 .5" />
            </svg>
          </div>
          <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors duration-300">
            Javascript
          </span>
        </div>
        {/* card 5 */}
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="500"
          className="flex flex-col items-center justify-center p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/20 cursor-pointer group"
        >
          <div className="mb-4 transition-all duration-300 group-hover:scale-110 filter grayscale group-hover:grayscale-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-18 w-18"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M15 17.5c.32 .32 .754 .5 1.207 .5h.543c.69 0 1.25 -.56 1.25 -1.25v-.25a1.5 1.5 0 0 0 -1.5 -1.5a1.5 1.5 0 0 1 -1.5 -1.5v-.25c0 -.69 .56 -1.25 1.25 -1.25h.543c.453 0 .887 .18 1.207 .5" />
              <path d="M9 12h4" />
              <path d="M11 12v6" />
              <path d="M21 19v-14a2 2 0 0 0 -2 -2h-14a2 2 0 0 0 -2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2 -2" />
            </svg>
          </div>
          <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors duration-300">
            Typescript
          </span>
        </div>
        {/* card 6 */}
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="100"
          className="flex flex-col items-center justify-center p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/20 cursor-pointer group"
        >
          <div className="mb-4 transition-all duration-300 group-hover:scale-110 filter grayscale group-hover:grayscale-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-18 w-18"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M2 12a10 9 0 1 0 20 0a10 9 0 1 0 -20 0" />
              <path d="M5.5 15l.395 -1.974l.605 -3.026h1.32a1 1 0 0 1 .986 1.164l-.167 1a1 1 0 0 1 -.986 .836h-1.653" />
              <path d="M15.5 15l.395 -1.974l.605 -3.026h1.32a1 1 0 0 1 .986 1.164l-.167 1a1 1 0 0 1 -.986 .836h-1.653" />
              <path d="M12 7.5l-1 5.5" />
              <path d="M11.6 10h2.4l-.5 3" />
            </svg>
          </div>
          <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors duration-300">
            Php
          </span>
        </div>
        {/* card 7 */}
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
          className="flex flex-col items-center justify-center p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/20 cursor-pointer group"
        >
          <div className="mb-4 transition-all duration-300 group-hover:scale-110 filter grayscale group-hover:grayscale-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-18 w-18"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M11.667 6c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 2 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968m-4 6.5c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 1.975 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968" />
            </svg>
          </div>
          <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors duration-300">
            Tailwind CSS
          </span>
        </div>

        {/* card 8 */}
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
          className="flex flex-col items-center justify-center p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/20 cursor-pointer group"
        >
          <div className="mb-4 transition-all duration-300 group-hover:scale-110 filter grayscale group-hover:grayscale-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-18 w-18"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 12a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
              <path d="M6 6a3 3 0 0 1 3 -3h6a3 3 0 0 1 3 3a3 3 0 0 1 -3 3h-6a3 3 0 0 1 -3 -3" />
              <path d="M9 9a3 3 0 0 0 0 6h3m-3 0a3 3 0 1 0 3 3v-15" />
            </svg>
          </div>
          <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors duration-300">
            Figma
          </span>
        </div>
        {/* card 9 */}
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="400"
          className="flex flex-col items-center justify-center p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/20 cursor-pointer group"
        >
          <div className="mb-4 transition-all duration-300 group-hover:scale-110 filter grayscale group-hover:grayscale-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-18 w-18"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M9 9v8.044a2 2 0 0 1 -2.996 1.734l-1.568 -.9a3 3 0 0 1 -1.436 -2.561v-6.635a3 3 0 0 1 1.436 -2.56l6 -3.667a3 3 0 0 1 3.128 0l6 3.667a3 3 0 0 1 1.436 2.561v6.634a3 3 0 0 1 -1.436 2.56l-6 3.667a3 3 0 0 1 -3.128 0" />
              <path d="M17 9h-3.5a1.5 1.5 0 0 0 0 3h2a1.5 1.5 0 0 1 0 3h-3.5" />
            </svg>
          </div>
          <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors duration-300">
            Node.js
          </span>
        </div>
        {/* card 5 */}
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="500"
          className="flex flex-col items-center justify-center p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/20 cursor-pointer group"
        >
          <div className="mb-4 transition-all duration-300 group-hover:scale-110 filter grayscale group-hover:grayscale-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-18 w-18"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M13 21c-1.427 -1.026 -3.59 -3.854 -4 -6c-.486 .77 -1.501 2 -2 2c-1.499 -.888 -.574 -3.973 0 -6c-1.596 -1.433 -2.468 -2.458 -2.5 -4c-3.35 -3.44 -.444 -5.27 2.5 -3h1c8.482 .5 6.421 8.07 9 11.5c2.295 .522 3.665 2.254 5 3.5c-2.086 -.2 -2.784 -.344 -3.5 0c.478 1.64 2.123 2.2 3.5 3" />
              <path d="M9 7h.01" />
            </svg>
          </div>
          <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors duration-300">
            My Sql
          </span>
        </div>
      </div>
    </div>
  );
};

export default TechTools;
