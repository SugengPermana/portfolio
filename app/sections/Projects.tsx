"use client";
import { SectionTitle } from "../components/SectionTitle";
import CardProjects from "../components/ui/CardProjects";

import { useState } from "react";
import { projects } from "../lib/data";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);
  return (
    <section id="projects" className="w-full max-w-6xl mx-auto py-10 px-6">
      <div className="transition-all duration-1000 ease-out transform opacity-100 translate-y-0 ">
        <div className="text-center flex flex-col items-center justify-center ">
          {/* judul Projects */}
          <SectionTitle text="Projects " className="mb-6" />
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-center mt-10">
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-blue-500">
              Projects
            </span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8 text-center">
            A collection of my best work in website development and graphic
            design.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={() => setActiveCategory("All")}
            className={`px-6 py-2.5 rounded-full text-sm font-medium flex items-center gap-2 border shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:scale-105 transition-transform duration-300 ${
              activeCategory === "All"
                ? "text-primary-foreground bg-primary border-primary"
                : "bg-accent/10 text-muted-foreground hover:text-primary-foreground hover:bg-primary border-primary"
            }`}
          >
            All Projects
          </button>
          <button
            onClick={() => setActiveCategory("Web Dev")}
            className={`px-6 py-2.5 rounded-full text-sm font-medium flex items-center gap-2 border shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:scale-105 transition-transform duration-300 ${
              activeCategory === "Web Dev"
                ? "text-primary-foreground bg-primary border-primary"
                : "bg-accent/10 text-muted-foreground hover:text-primary-foreground hover:bg-primary border-primary"
            }`}
          >
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
          <button
            onClick={() => setActiveCategory("Design App")}
            className={`px-6 py-2.5 rounded-full text-sm font-medium flex items-center gap-2 border shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:scale-105 transition-transform duration-300 ${
              activeCategory === "Design App"
                ? "text-primary-foreground bg-primary border-primary"
                : "bg-accent/10 text-muted-foreground hover:text-primary-foreground hover:bg-primary border-primary"
            }`}
          >
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
      {/* =======CardProject===== */}
      <CardProjects data={filteredProjects} />
      <div className="mt-12 text-center">
        {/* di bikinin auto berapa project yang keliatan */}
        <p className="text-muted-foreground text-sm mb-30">
          Showing {filteredProjects.length} of {projects.length} projects
        </p>
      </div>
    </section>
  );
};

export default Projects;
