"use client";
import { SectionTitle } from "../components/SectionTitle";
import Link from "next/link";
import CardAbout from "../components/ui/CardAbout";
import { stats } from "../lib/data";

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
              <h1
                data-aos="fade-up"
                data-aos-duration="1000"
                className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-center flex flex-col mt-15"
              >
                {/* text sub judul */}
                <span className="text-primary">
                  Transforming ideas into impactful
                </span>
                <span className="text-primary">Web Experiences</span>
                <span className="text-primary">through technology</span>
              </h1>
            </div>
            {/* ini bg and border card */}
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className="flex flex-wrap justify-center gap-6 md:gap-12 mt-12 py-8 px-4"
            >
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="group flex flex-col items-center justify-center relative"
                >
                  {/* bg and border */}
                  <div className="absolute inset-0 bg-card rounded-2xl -z-10 shadow-2xl shadow-purple-900/20"></div>
                  <div className="absolute inset-0 rounded-2xl border border-border -z-10"></div>
                  {/* Value */}
                  <div className="relative p-8 text-center">
                    <div className="relative">
                      <span className="text-5xl md:text-6xl font-bold text-foreground mb-3 block group-hover:scale-110 transition-transform duration-500">
                        {stat.value}
                      </span>
                      <div className="absolute inset-0 bg-linear-to-r from-purple-500/20 to-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                    </div>
                    {/* Label */}
                    <div className="flex items-center gap-2 justify-center">
                      <div className="w-1 h-1 bg-linear-to-r from-purple-400 to-blue-400 rounded-full"></div>
                      <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                        {stat.label}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
              {/* introduction sections */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20 pt-30">
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
                          <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-accent/10 text-purple-600 dark:text-purple-400">
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
                          <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-accent/10 text-purple-600 dark:text-purple-400">
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
                          <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-accent/10 text-purple-600 dark:text-purple-400">
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
                          <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-accent/10 text-purple-600 dark:text-purple-400">
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
                          href=""
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
              <CardAbout />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
