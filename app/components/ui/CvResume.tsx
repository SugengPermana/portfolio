"use client";
import { useState } from "react";

const educationData = [
  {
    period: "2024 - Present",
    major: "S1 Information Technology",
    school: "Universitas Pamulang",
    description:
      "Currently I am studying at Universitas Pamulang, Information Technology Department, Informatics Engineering Study Program, 3nd Semester.",
    hoverColor: "#003d7a",
    iconType: "graduation" as const,
  },
  {
    period: "2021 - 2024",
    major: "Pariwisata & Perhotelan",
    school: "SMK Laboratorium Indonesia",
    description:
      "I also graduated from SMK Laboratorium Indonesia majoring in Pariwisata & Perhotelan in this school I learn about public speaking and how to serve guests.",
    hoverColor: "#006d3a",
    iconType: "graduation" as const,
  },
];

const experienceData = [
  {
    period: "2025 - Present",
    role: "Freelance As Web Developer",
    company: "EveryWhere",
    description:
      "I work as a freelance web developer, creating websites for clients and helping them with their web development needs.",
    hoverColor: "#a600ff",
    iconType: "briefcase" as const,
  },
];

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
      className="w-12 h-12 shrink-0 rounded-xl border border-white/10 flex items-center justify-center transition-all duration-300 cursor-pointer"
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

const CvResume = () => {
  return (
    <div>
      <div className="mb-20">
        {/* education */}
        <div data-aos="fade-up"
              data-aos-duration="1000" data-aos-delay="100" className="transition-all duration-1000 ease-out transform opacity-100 translate-y-0">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-primary border-b border-primary/20 pb-4">
            My Education
          </h3>
        </div>
        {/* education entries */}
        <div data-aos="fade-up"
              data-aos-duration="1000" data-aos-delay="100" className="flex flex-col space-y-6">
          {educationData.map((edu, index) => (
            <div key={index}>
              {index > 0 && <div className="h-px bg-white/50 mx-2 mb-6"></div>}
              <div className="transition-all duration-1000 ease-out transform opacity-100 translate-y-0">
                <div className="flex flex-col md:grid md:grid-cols-[150px_auto_1fr] gap-4 md:gap-8 p-2">
                  {/* tanggal */}
                  <div className="text-gray-400 font-medium text-sm md:text-base pt-1">
                    {edu.period}
                  </div>
                  {/* logo + jurusan dan universitas */}
                  <div className="flex items-start gap-4">
                    <SchoolIcon
                      type={edu.iconType}
                      hoverColor={edu.hoverColor}
                    />
                    <div className="flex flex-col">
                      <h4 className="text-xl font-bold text-black dark:text-white">
                        {edu.major}
                      </h4>
                      <span className="text-gray-400 text-sm mt-1">
                        Studied at{" "}
                        <span className="text-muted-foreground font-medium">
                          {edu.school}
                        </span>
                      </span>
                    </div>
                  </div>
                  {/* descripsi */}
                  <div className="text-black dark:text-white text-sm leading-relaxed">
                    {edu.description}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mb-20">
        {/* experience */}
        <div data-aos="fade-up"
              data-aos-duration="1000" data-aos-delay="200" className="transition-all duration-1000 ease-out transform opacity-100 translate-y-0">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-primary border-b border-primary/20 pb-4">
            My Experience
          </h3>
        </div>
        <div data-aos="fade-up"
              data-aos-duration="1000" data-aos-delay="200" className="flex flex-col space-y-6">
          {experienceData.map((exp, index) => (
            <div
              key={index}
              className="transition-all duration-1000 ease-out transform opacity-100 translate-y-0"
            >
              <div className="flex flex-col md:grid md:grid-cols-[150px_auto_1fr] gap-4 md:gap-8 p-2">
                {/* tanggal */}
                <div className="text-gray-400 font-medium text-sm md:text-base pt-1">
                  {exp.period}
                </div>
                {/* logo + role dan company */}
                <div className="flex items-start gap-4">
                  <SchoolIcon type={exp.iconType} hoverColor={exp.hoverColor} />
                  <div className="flex flex-col">
                    <h4 className="text-xl font-bold text-black dark:text-white">
                      {exp.role}
                    </h4>
                    <span className="text-gray-400 text-sm mt-1">
                      Work{" "}
                      <span className="text-muted-foreground font-medium">
                        {exp.company}
                      </span>
                    </span>
                  </div>
                </div>
                {/* descripsi */}
                <div className="text-black dark:text-white text-sm leading-relaxed">
                  {exp.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CvResume;
