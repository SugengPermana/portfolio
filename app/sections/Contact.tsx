import ShinyText from "../components/ui/ShinyText";
import Link from "next/link";
const Contact = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden pb-10 border-t border-white/10 mt-40 w-full "
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-linear-to-r from-transparent via-white/10 to-transparent"></div>
      <div className="max-w-6xl mx-auto px-6 py-12 relative z-10">
        <div className="text-center">
          <ShinyText
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-linear-to-r from-purple-500/10 to-blue-500/10 border border-primary backdrop-blur-sm mb-15 group hover:scale-105 transition-transform duration-300"
            text="✨ Get In Touch "
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

        <div className="transition-all duration-1000 ease-out transform opacity-100 translate-y-0 ">
          <div className="flex flex-col gap-10">
            <div className="flex gap-6">
              <Link
                className="p-4 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center text-white text-2xl hover:bg-purple-600 hover:border-purple-600 hover:-translate-y-1 transition-all duration-300"
                href=""
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="h-15 w-15"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4l0 -8" />
                  <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                  <path d="M16.5 7.5v.01" />
                </svg>
              </Link>
              <Link
                className="p-4 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center text-white text-2xl hover:bg-purple-600 hover:border-purple-600 hover:-translate-y-1 transition-all duration-300"
                href=""
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-15 w-15"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                  <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
                </svg>
              </Link>
              <Link
                className="p-4 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center text-white text-2xl hover:bg-purple-600 hover:border-purple-600 hover:-translate-y-1 transition-all duration-300"
                href=""
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="h-15 w-15"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                </svg>
              </Link>
            </div>
            <div className="max-w-3xl mt-4">
              <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                Want to know more about me, tell me about your project or just
                to say hello?
                <span className="text-purple-500"> Drop me a line </span>
                and I'll get back as soon as possible.
              </h2>
            </div>
          </div>
          <div className="w-full h-[1px] bg-white/10 my-4"></div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
