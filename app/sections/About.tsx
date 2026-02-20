"use client";
import { SectionTitle } from "../components/SectionTitle";
import Link from "next/link";
import { stats } from "../lib/data";
import Image from "next/image";
import { SocialLinks } from "../components/SocialLinks";
import TypingGlitch from "../components/ui/TypingGlitch";
import RotatingText from "../components/ui/About/RotatingText";

const About = () => {
  return (
    <section className="w-full mb-20">
      <div className="relative w-full max-w-7xl mx-auto py-10 lg:py-15 px-6 lg:px-8 overflow-hidden">
        <div className=" ">
          {/* ini bg kiri kanan */}
          <div className="absolute top-1/4 -left-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none"></div>
          <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none"></div>
        </div>

        <div className="relative z-10 pt-20">
          <div
            id="about"
            className="pt-10 transition-all duration-1000 ease-out transform opacity-100 translate-y-0 "
          >
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className="text-center flex flex-col items-center justify-center mb-10"
            >
              {/* text judul */}
              <SectionTitle text=" About Me" className="mb-10 h-10" />
            </div>
            {/* Two-column layout: Profile Card (left) + Subtitle (right) */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-16 w-full">
              {/* Left: Compact Profile Card */}
              <div
                data-aos="fade-right"
                data-aos-duration="1000"
                className="font-chakra shrink-0 w-full max-w-xs mx-auto md:mx-0 rounded-3xl border border-border bg-card shadow-2xl shadow-purple-900/20 relative overflow-hidden transition-all duration-500 hover:border-cyan-500/30 hover:shadow-purple-500/20 group/card"
              >
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-linear-to-br from-cyan-600/10 via-transparent to-cyan-600/10 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                <div className="relative z-10 p-4 flex flex-col items-center text-center">
                  {/* Briefcase icon top-left */}
                  <div className="absolute top-4 left-4">
                    <div className="p-2 rounded-full bg-linear-to-br from-cyan-500/20 to-cyan-500/20">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="#a600ff"
                        className="icon icon-tabler icons-tabler-filled icon-tabler-briefcase"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M22 13.478v4.522a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-4.522l.553 .277a20.999 20.999 0 0 0 18.897 -.002l.55 -.275zm-8 -11.478a3 3 0 0 1 3 3v1h2a3 3 0 0 1 3 3v2.242l-1.447 .724a19.002 19.002 0 0 1 -16.726 .186l-.647 -.32l-1.18 -.59v-2.242a3 3 0 0 1 3 -3h2v-1a3 3 0 0 1 3 -3h4zm-2 8a1 1 0 0 0 -1 1a1 1 0 1 0 2 .01c0 -.562 -.448 -1.01 -1 -1.01zm2 -6h-4a1 1 0 0 0 -1 1v1h6v-1a1 1 0 0 0 -1 -1z" />
                      </svg>
                    </div>
                  </div>

                  {/* Profile Image */}
                  <div className="mt-6 mb-4 w-40 h-40 rounded-2xl p-0.5 bg-linear-to-br from-purple-500 via-cyan-500 to-purple-400 shadow-lg shadow-purple-500/30">
                    <div className="w-full h-full rounded-[14px] overflow-hidden bg-gray-900">
                      <Image
                        src="/new.png"
                        loading="eager"
                        alt="Profile"
                        width={200}
                        height={200}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-110 group-hover/card:brightness-110"
                      />
                    </div>
                  </div>

                  {/* Name */}
                  <h2 className="text-xl font-bold text-foreground tracking-tight">
                    Sugeng.ID
                  </h2>

                  {/* Role - Typing Animation */}
                  <div className="text-sm text-muted-foreground min-h-6 mb-2">
                    <TypingGlitch />
                  </div>

                  {/* Social Media */}
                  <SocialLinks
                    className="flex-row justify-center mb-6"
                    iconClassName="p-2.5"
                  />

                  {/* Download CV */}
                  <Link
                    href="/cv.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full mt-2 px-5 py-2.5 rounded-xl font-semibold text-sm
                        border border-border bg-transparent 
                        text-foreground
                        hover:border-white hover:bg-cyan-400 hover:text-black
                        transition-all flex items-center justify-center gap-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                      <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                      <path d="M12 17v-6" />
                      <path d="M9.5 14.5l2.5 2.5l2.5 -2.5" />
                    </svg>
                    <span>Download CV</span>
                  </Link>
                </div>
              </div>

              {/* Right: Subtitle */}
              <div
                data-aos="fade-left"
                data-aos-duration="1000"
                className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left max-w-xl w-full mx-auto md:mx-0"
              >
                <h1 className="leading-tight tracking-tight space-y-2">
                  {/* line 1 */}
                  <span className="block text-3xl sm:text-4xl md:text-5xl text-primary drop-shadow-sm font-extrabold mb-2 md:mb-6">
                    Fullstack Developer & AI Engineer
                  </span>

                  {/* line 2 rotating text */}
                  <div className="flex items-center justify-center md:justify-start gap-2 text-lg sm:text-xl md:text-2xl text-primary min-h-2.5 md:min-h-2.5 font-semibold">
                    <span>I Created</span>

                    <div className="flex items-center justify-center min-w-35 md:min-w-45">
                      <RotatingText
                        texts={[
                          "Landing Page",
                          "Company Profile",
                          "Booking App",
                          "AI Chatbot",
                        ]}
                        mainClassName="px-3 py-1 md:py-2 bg-cyan-500 text-black rounded-lg font-semibold flex items-center justify-center w-full text-primary font-semibold"
                        staggerFrom="last"
                        initial={{ y: "70%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "-100%" }}
                        splitBy="words"
                        staggerDuration={0.025}
                        splitLevelClassName="overflow-hidden"
                        transition={{
                          type: "spring",
                          damping: 50,
                          stiffness: 500,
                        }}
                        rotationInterval={3000}
                      />
                    </div>
                  </div>

                  {/* line 3 location */}
                  <div className="flex items-center justify-center sm:justify-start gap-2 text-base sm:text-lg md:text-xl text-primary font-semibold">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                      <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0" />
                    </svg>
                    <span>Based in Bogor, Jawa Barat, Indonesia</span>
                  </div>
                </h1>

                {/* stats */}
                <div className="flex flex-wrap gap-4 mt-8 w-full justify-center md:justify-start font-chakra">
                  {stats.map((stat, index) => (
                    <div
                      key={index}
                      className="group flex-1 min-w-27.5 max-w-40 px-5 py-4 rounded-2xl bg-card border border-border text-center"
                    >
                      <span className="text-3xl md:text-4xl font-bold block mb-1">
                        {stat.value}
                      </span>
                      <span className="text-xs uppercase tracking-wider">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* ini bg and border card */}
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className="flex flex-wrap justify-center gap-6 md:gap-12 mt-12 py-8 px-4"
            >
              {/* introduction sections */}
              <div className="font-poppins grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20 pt-30">
                <div className="space-y-8">
                  <div className="transition-all duration-1000 ease-out transform opacity-100 translate-y-0 ">
                    <div>
                      {/* Title utama */}
                      <h2
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        className="text-3xl font-bold text-foreground mb-2"
                      >
                        <span className="mr-2">Wer</span>
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-500">
                          bin ich?
                        </span>
                      </h2>

                      {/* Subtitle kecil */}
                      <p
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6"
                      >
                        Who am I?
                      </p>
                      <div
                        data-aos="fade-up"
                        data-aos-duration="1500"
                        className="space-y-6 text-muted-foreground text-lg leading-relaxed"
                      >
                        <p>
                          I'm a passionate web developer with a knack for
                          building engaging and user-friendly digital
                          experiences. I specialize in modern web technologies
                          and am always eager to learn new things.
                        </p>
                        <p>
                          My goal is to leverage my technical skills to create
                          solutions that are not only functional but also
                          visually <strong>appealing and intuitive</strong> to
                          use.
                        </p>
                        <p>
                          Beyond development, I’m a lifelong learner who
                          continuously explores emerging web technologies and
                          AI-driven solutions to deliver innovative,
                          future-ready experiences.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* section form kontak */}
                <div className="space-y-6">
                  <div className="transition-all duration-1000 ease-out transform opacity-100 translate-y-0 ">
                    <div className="p-6 rounded-2xl">
                      <div className="space-y-4">
                        {/* Name */}
                        <div
                          data-aos="fade-up"
                          data-aos-duration="1000"
                          className="flex items-center gap-4 p-2 rounded-lg hover:bg-accent/10 transition-colors duration-300"
                        >
                          <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-foreground text-background hover:bg-chart-5 hover:text-chart-4">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="w-5 h-5"
                            >
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              />
                              <path d="M12 2a5 5 0 1 1 -5 5l.005 -.217a5 5 0 0 1 4.995 -4.783z" />
                              <path d="M14 14a5 5 0 0 1 5 5v1a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-1a5 5 0 0 1 5 -5h4z" />
                            </svg>
                          </div>
                          <div className="overflow-hidden">
                            <div className="text-xs text-muted-foreground">
                              Name
                            </div>
                            <div className="text-foreground text-sm font-medium truncate">
                              Sugeng Permana Desembry
                            </div>
                          </div>
                        </div>
                        {/* phone */}
                        <div
                          data-aos="fade-up"
                          data-aos-duration="1000"
                          className="flex items-center gap-4 p-2 rounded-lg hover:bg-accent/10 transition-colors duration-300"
                        >
                          <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-foreground text-background hover:bg-chart-5 hover:text-chart-4">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="h-5 w-5"
                            >
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              />
                              <path d="M9 3a1 1 0 0 1 .877 .519l.051 .11l2 5a1 1 0 0 1 -.313 1.16l-.1 .068l-1.674 1.004l.063 .103a10 10 0 0 0 3.132 3.132l.102 .062l1.005 -1.672a1 1 0 0 1 1.113 -.453l.115 .039l5 2a1 1 0 0 1 .622 .807l.007 .121v4c0 1.657 -1.343 3 -3.06 2.998c-8.579 -.521 -15.418 -7.36 -15.94 -15.998a3 3 0 0 1 2.824 -2.995l.176 -.005h4z" />
                            </svg>
                          </div>
                          <div className="overflow-hidden">
                            <div className="text-xs text-muted-foreground">
                              Phone
                            </div>
                            <div className="text-foreground text-sm font-medium truncate">
                              +62 882-9989-8410
                            </div>
                          </div>
                        </div>
                        {/* email */}
                        <div
                          data-aos="fade-up"
                          data-aos-duration="1000"
                          className="flex items-center gap-4 p-2 rounded-lg hover:bg-accent/10 transition-colors duration-300"
                        >
                          <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-foreground text-background hover:bg-chart-5 hover:text-chart-4">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="h-5 w-5"
                            >
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              />
                              <path d="M22 7.535v9.465a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-9.465l9.445 6.297l.116 .066a1 1 0 0 0 .878 0l.116 -.066l9.445 -6.297z" />
                              <path d="M19 4c1.08 0 2.027 .57 2.555 1.427l-9.555 6.37l-9.555 -6.37a2.999 2.999 0 0 1 2.354 -1.42l.201 -.007h14z" />
                            </svg>
                          </div>
                          <div className="overflow-hidden">
                            <div className="text-xs text-muted-foreground">
                              Email
                            </div>
                            <div className="text-foreground text-sm font-medium truncate">
                              sugengpermanad@gmail.com
                            </div>
                          </div>
                        </div>
                        {/* location */}
                        <div
                          data-aos="fade-up"
                          data-aos-duration="1000"
                          className="flex items-center gap-4 p-2 rounded-lg hover:bg-accent/10 transition-colors duration-300"
                        >
                          <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-foreground text-background hover:bg-chart-5 hover:text-chart-4">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="h-5 w-5"
                            >
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              />
                              <path d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6" />
                            </svg>
                          </div>
                          <div className="overflow-hidden">
                            <div className="text-xs text-muted-foreground">
                              Location
                            </div>
                            <div className="text-foreground text-sm font-medium truncate">
                              Bogor, Indonesia
                            </div>
                          </div>
                        </div>
                        {/* send message */}
                        <Link
                          data-aos="fade-in"
                          data-aos-duration="1000"
                          href="#contact"
                          className="w-full mt-6 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-bold text-sm hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 border border-primary"
                        >
                          <span>Send Message</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            className="h-5 w-5
                            "
                          >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M8 13v-8.5a1.5 1.5 0 0 1 3 0v7.5" />
                            <path d="M11 11.5v-2a1.5 1.5 0 0 1 3 0v2.5" />
                            <path d="M14 10.5a1.5 1.5 0 0 1 3 0v1.5" />
                            <path d="M17 11.5a1.5 1.5 0 0 1 3 0v4.5a6 6 0 0 1 -6 6h-2h.208a6 6 0 0 1 -5.012 -2.7l-.196 -.3c-.312 -.479 -1.407 -2.388 -3.286 -5.728a1.5 1.5 0 0 1 .536 -2.022a1.867 1.867 0 0 1 2.28 .28l1.47 1.47" />
                            <path d="M5 3l-1 -1" />
                            <path d="M4 7h-1" />
                            <path d="M14 3l1 -1" />
                            <path d="M15 6h1" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* ===============CardAabout=================== */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
