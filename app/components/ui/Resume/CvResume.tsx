"use client";
import { useEffect, useState } from "react";
import {
  resumeBadges,
  resumeEducation,
  resumeExperiences,
} from "../../../lib/data";

const SchoolIcon = ({
  type,
  hoverColor,
}: {
  type: "graduation" | "briefcase";
  hoverColor: string;
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="w-12 h-12 shrink-0 rounded-xl border border-muted-foreground flex items-center justify-center transition-all duration-300 cursor-pointer"
      style={{
        backgroundColor: hovered ? `${hoverColor}20` : "rgba(255,255,255,0.05)",
        borderColor: hovered ? `${hoverColor}50` : "rgba(255,255,255,0.1)",
      }}
    >
      {type === "graduation" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke={hovered ? hoverColor : "#9ca3af"}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="transition-all duration-300"
          style={{ filter: hovered ? "none" : "grayscale(100%)" }}
        >
          <path d="M22 9l-10 -4l-10 4l10 4l10 -4v6" />
          <path d="M6 10.6v5.4a6 3 0 0 0 12 0v-5.4" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke={hovered ? hoverColor : "#9ca3af"}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="transition-all duration-300"
          style={{ filter: hovered ? "none" : "grayscale(100%)" }}
        >
          <path d="M3 21l18 0" />
          <path d="M9 8l1 0" />
          <path d="M9 12l1 0" />
          <path d="M9 16l1 0" />
          <path d="M14 8l1 0" />
          <path d="M14 12l1 0" />
          <path d="M14 16l1 0" />
          <path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16" />
        </svg>
      )}
    </div>
  );
};

const SuitcaseIcon = () => (
  <div className="w-11 h-11 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 21l18 0" />
      <path d="M9 6h6" />
      <path d="M10 6l-.5 -2h5l-.5 2" />
      <path d="M5 21v-11a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v11" />
    </svg>
  </div>
);

const BadgeIcon = () => (
  <div className="w-10 h-10 rounded-4xl border bg-accent text-primary border-foreground flex items-center justify-center ">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M17 17v-13l-5 3l-5 -3v13l5 3l5 -3" />
    </svg>
  </div>
);

const SchoolBuildingIcon = () => (
  <div className="w-10 h-10 rounded-4xl border bg-accent text-primary border-foreground flex items-center justify-center">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 26"
      fill="none"
      stroke="currentColor"
    >
      <path d="M3 21h18" />
      <path d="M5 21V9l7-4 7 4v12" />
      <path d="M9 21v-6h6v6" />
      <path d="M10 13h1" />
      <path d="M13 13h1" />
    </svg>
  </div>
);

const CvResume = () => {
  const [activeExperienceIndex, setActiveExperienceIndex] = useState(0);

  useEffect(() => {
    if (resumeExperiences.length <= 1) return;

    const interval = setInterval(() => {
      setActiveExperienceIndex((prev) => (prev + 1) % resumeExperiences.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const activeExperience = resumeExperiences[activeExperienceIndex];

  return (
    <div className="space-y-20">
      {/* EXPERIENCE - horizontal timeline with auto-rotate */}
      <div className="transition-all duration-1000 ease-out transform opacity-100 translate-y-0">
        {/* header + horizontal timeline with center dot */}
        <div className="mb-2">
          <div className="relative w-full py-8 md:py-10">
            {/* timeline line — starts from button right edge to container right border */}
            <div className="absolute left-12 md:left-40 lg:left-40 right-0 top-1/2 h-px bg-linear-to-r from-primary/50 via-primary/30 to-primary/10" />

            {/* button icon on the left, sitting on the timeline */}
            <div
              data-aos="fade-right"
              data-aos-duration="1000"
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 flex items-center gap-3"
            >
              <SuitcaseIcon />
              <span className="hidden md:inline uppercase tracking-[0.25em] text-xs text-muted-foreground">
                Experience
              </span>
            </div>

            {/* period — above dot, raised higher */}
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className="absolute left-1/2 -translate-x-1/2 z-10 pointer-events-none"
              style={{ top: "calc(50% - 2.5rem)" }}
            >
              <div className="text-xs md:text-sm font-medium tracking-wide text-primary/80 whitespace-nowrap">
                {activeExperience.period}
              </div>
            </div>

            {/* dot — centered exactly on timeline line */}
            <div
              data-aos="fade-in"
              data-aos-duration="1000"
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none"
            >
              <div className="relative flex items-center justify-center">
                <div
                  className="w-4 h-4 md:w-5 md:h-5 rounded-full border-2 border-primary bg-background"
                  style={{
                    boxShadow: `0 0 20px ${activeExperience.hoverColor}aa`,
                  }}
                />
                <div className="absolute inset-0 animate-ping rounded-full bg-primary/20" />
              </div>
            </div>
          </div>
        </div>

        {/* carousel content, always centered under fixed dot */}
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="100"
          className="relative w-full max-w-3xl mx-auto mt-2 overflow-hidden"
        >
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${activeExperienceIndex * 100}%)`,
            }}
          >
            {resumeExperiences.map((exp) => (
              <div
                key={exp.id}
                className="w-full shrink-0 px-2 sm:px-4 flex justify-center"
              >
                <div className="w-full max-w-3xl rounded-2xl px-4 py-3 sm:px-6 sm:py-4 md:px-12 lg:px-20 md:py-6 text-center">
                  <h4 className="text-base sm:text-lg md:text-2xl text-black dark:text-white mb-1">
                    {exp.role}
                  </h4>
                  <p className="text-sm md:text-base text-muted-foreground mb-2 sm:mb-3">
                    <span className="font-semibold">{exp.company}</span>
                  </p>
                  <p className="text-xs sm:text-sm text-black dark:text-white/90 leading-relaxed mb-2 sm:mb-3">
                    {exp.description}
                  </p>
                  {exp.achievements && exp.achievements.length > 0 && (
                    <ul className="text-xs md:text-sm text-muted-foreground space-y-1.5 text-left list-disc pl-4 sm:pl-5">
                      {exp.achievements.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* dots navigation under card */}
        <div className="flex items-center justify-center gap-3 mt-4">
          {resumeExperiences.map((exp, index) => {
            const isActive = index === activeExperienceIndex;
            return (
              <button
                key={exp.id}
                type="button"
                onClick={() => setActiveExperienceIndex(index)}
                className="group relative"
              >
                <span
                  className={`block rounded-full transition-all duration-300 ${
                    isActive
                      ? "w-4 h-4 bg-primary shadow-[0_0_12px_rgba(79,70,229,0.9)]"
                      : "w-2.5 h-2.5 bg-muted-foreground/40 group-hover:bg-primary/60"
                  }`}
                />
              </button>
            );
          })}
        </div>
      </div>

      {/* BADGES & EDUCATION - vertical timelines */}
      <div className="grid md:grid-cols-2 gap-10 md:gap-12 mb-30">
        {/* badges column */}
        <div>
          <div
            data-aos="fade-in"
            data-aos-duration="1000"
            data-aos-delay="100"
            className="flex items-center gap-3 mb-6"
          >
            <BadgeIcon />
            <div>
              <p
                data-aos="fade-left"
                data-aos-duration="1000"
                className="text-xs uppercase tracking-[0.25em] text-primary"
              >
                Badges
              </p>
            </div>
          </div>

          <div className="relative pl-6">
            <div className="absolute left-1.75 top-0 bottom-0 w-px bg-linear-to-b from-cyan-400/60 via-cyan-400/20 to-transparent" />

            <div className="space-y-0">
              {resumeBadges.map((badge, index) => (
                <div
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  key={index}
                  className="relative"
                >
                  {/* dot — centered on timeline line */}
                  <div
                    className="absolute -left-6 top-6 flex items-center justify-center"
                    style={{ width: "0.875rem" }}
                  >
                    <div className="w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_14px_rgba(79,70,229,0.9)]" />
                  </div>

                  {/* card */}
                  <div className="flex-1 bg-white/5 dark:bg-black/25 border border-cyan-400/50 to-purple-400/50 rounded-2xl px-4 py-3 md:px-5 md:py-4">
                    <p className="border border-accent-foreground/30 max-w-fit px-2 py-1 rounded-sm text-[9px] md:text-xs font-medium uppercase tracking-wide text-cyan-600 dark:text-cyan-400 mb-2">
                      {badge.month}
                    </p>
                    <h4 className="text-sm md:text-base font-semibold text-black dark:text-white mb-1">
                      {badge.title}
                    </h4>
                    <p className="text-xs md:text-sm text-muted-foreground mb-2">
                      Issued by{" "}
                      <span className="font-medium text-cyan-600 dark:text-cyan-400">
                        {badge.issuer}
                      </span>
                    </p>
                    <p className="text-xs md:text-sm text-black dark:text-white/90 mb-2">
                      {badge.description}
                    </p>
                    <a
                      href={badge.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] md:text-xs font-medium text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 dark:hover:text-cyan-300"
                    >
                      View Badges
                      <span aria-hidden="true">↗</span>
                    </a>
                  </div>

                  {/* separator line between cards */}
                  {index < resumeBadges.length - 1 && (
                    <div className="relative h-7">
                      <div className="absolute left-[-1.1rem] top-0 bottom-0 flex items-center">
                        <div className="w-80 h-px bg-cyan-400/80" />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* education column */}
        <div>
          <div
            data-aos="fade-in"
            data-aos-duration="1000"
            data-aos-delay="100"
            className="flex items-center gap-3 mb-6"
          >
            <SchoolBuildingIcon />
            <div>
              <p
                data-aos="fade-left"
                data-aos-duration="1000"
                className="text-xs uppercase tracking-[0.25em] text-primary"
              >
                Education
              </p>
            </div>
          </div>

          <div className="relative pl-6">
            <div className="absolute left-1.75 top-0 bottom-0 w-px bg-linear-to-b from-blue-400/60 via-blue-400/20 to-transparent" />

            <div className="space-y-0">
              {resumeEducation.map((edu, index) => (
                <div
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  key={index}
                  className="relative"
                >
                  {/* dot — centered on timeline line */}
                  <div
                    className="absolute -left-6 top-6 flex items-center justify-center"
                    style={{ width: "0.875rem" }}
                  >
                    <div className="w-3 h-3 rounded-full bg-blue-400 shadow-[0_0_14px_rgba(96,165,250,0.8)]" />
                  </div>

                  {/* card */}
                  <div className="flex-1 bg-white/5 dark:bg-black/25 border border-blue-400/80 rounded-2xl px-4 py-3 md:px-5 md:py-4 flex flex-col gap-2">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="border border-accent-foreground/30 max-w-fit px-2 py-1 rounded-sm text-[9px] md:text-xs font-medium uppercase tracking-wide text-blue-500 mb-2">
                          {edu.period}
                        </p>
                        <h4 className="text-sm md:text-base font-semibold text-black dark:text-white mb-1">
                          {edu.major}
                        </h4>
                        <p className="text-xs md:text-sm text-muted-foreground">
                          Studied at{" "}
                          <span className="font-medium text-blue-500">
                            {edu.school}
                          </span>
                        </p>
                        {/* Image Logo Education*/}
                      </div>
                      {edu.image && (
                        <a
                          href={edu.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 md:w-14 md:h-14 rounded-md overflow-hidden border border-white/10 shrink-0 hover:border-blue-300 transition-colors"
                        >
                          <img
                            src={edu.image}
                            alt={edu.school}
                            className="w-full h-full object-cover"
                          />
                        </a>
                      )}
                    </div>

                    <p className="text-xs md:text-sm text-black dark:text-white/90 leading-relaxed">
                      {edu.description}
                    </p>

                    {edu.achievements && edu.achievements.length > 0 && (
                      <ul className="list-disc pl-4 space-y-1 text-[11px] md:text-xs text-muted-foreground">
                        {edu.achievements.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    )}

                    <div className="pt-1">
                      <a
                        href={edu.learnMoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[11px] md:text-xs font-medium text-blue-500 hover:text-blue-400"
                      >
                        Learn more
                        <span aria-hidden="true">↗</span>
                      </a>
                    </div>
                  </div>

                  {/* separator line between cards */}
                  {index < resumeEducation.length - 1 && (
                    <div className="relative h-7">
                      <div className="absolute left-[-1.1rem] top-0 bottom-0 flex items-center">
                        <div className="w-80 h-px bg-blue-400/30" />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CvResume;
