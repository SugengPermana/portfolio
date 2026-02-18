"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { projects } from "../../lib/data";

const CardProjects = ({ data }: { data: typeof projects }) => {
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);

  const closeModal = useCallback(() => {
    setSelectedProject(null);
  }, []);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    if (selectedProject) {
      document.addEventListener("keydown", handleKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [selectedProject, closeModal]);

  return (
    <>
      {/* grid card */}
      <div data-aos="fade-up"
              data-aos-duration="1000" data-aos-delay="100" className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {data.map((project, index) => (
          <div
            key={index}
            className="transition-all duration-1000 ease-out transform opacity-100 translate-y-0 "
          >
            <div
              onClick={() => setSelectedProject(project)}
              className="group rounded-2xl bg-neutral-900 border border-white/10 overflow-hidden flex flex-col h-full transition-colors duration-300 hover:border-blue-500/30 cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-t from-neutral-900 to-transparent z-10 opacity-60"></div>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="2"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col grow">
                <h3 className="text-xl font-bold text-white mb-2 transition-colors group-hover:text-blue-400">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 grow line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 rounded-md bg-white/5 text-gray-300 border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {/* Code Github & Live Demo or View Design */}
                <div className="flex items-center gap-4 mt-auto">
                  {project.isDesign ? (
                    <Link
                      href={project.links.design || "#"}
                      target="_blank"
                      onClick={(e) => e.stopPropagation()}
                      className="w-full py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-purple-500/20 hover:border-purple-500/30 hover:text-purple-300 text-gray-300 flex items-center justify-center gap-2 transition-all duration-300"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        className="icon icon-tabler icons-tabler-outline icon-tabler-eye"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                        <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
                      </svg>
                      View Design
                    </Link>
                  ) : (
                    <>
                      <Link
                        href={project.links.code || ""}
                        target="_blank"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          className="icon icon-tabler icons-tabler-outline icon-tabler-brand-github"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                        </svg>
                        Code
                      </Link>
                      <Link
                        href={project.links.demo || "#"}
                        target="_blank"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors font-medium"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          className="icon icon-tabler icons-tabler-outline icon-tabler-external-link"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
                          <path d="M11 13l9 -9" />
                          <path d="M15 4h5v5" />
                        </svg>
                        Live Demo
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ====== Project Detail Modal ====== */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-999 flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={closeModal}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

          {/* Modal Content */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-neutral-900 border border-white/10 shadow-2xl shadow-purple-900/30 animate-in zoom-in-95 duration-200"
          >
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/50 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M18 6l-12 12" />
                <path d="M6 6l12 12" />
              </svg>
            </button>

            {/* Image */}
            <div className="relative w-full h-64 md:h-80">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                className="object-cover rounded-t-2xl"
              />
              <div className="absolute inset-0 bg-linear-to-t from-neutral-900 via-neutral-900/40 to-transparent" />
            </div>

            {/* Info */}
            <div className="p-6 md:p-8 -mt-12 relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                {selectedProject.title}
              </h2>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6">
                {selectedProject.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1.5 rounded-lg bg-white/5 text-gray-300 border border-white/10 font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-4">
                {selectedProject.isDesign ? (
                  <Link
                    href={selectedProject.links.design || "#"}
                    target="_blank"
                    className="flex-1 py-3 rounded-xl bg-purple-500/20 border border-purple-500/30 text-purple-300 hover:bg-purple-500/30 flex items-center justify-center gap-2 transition-all duration-300 font-medium"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                      <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
                    </svg>
                    View Design
                  </Link>
                ) : (
                  <>
                    <Link
                      href={selectedProject.links.code || ""}
                      target="_blank"
                      className="flex-1 py-3 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 hover:text-white flex items-center justify-center gap-2 transition-all duration-300 font-medium"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                      </svg>
                      Source Code
                    </Link>
                    <Link
                      href={selectedProject.links.demo || "#"}
                      target="_blank"
                      className="flex-1 py-3 rounded-xl bg-blue-500/20 border border-blue-500/30 text-blue-300 hover:bg-blue-500/30 flex items-center justify-center gap-2 transition-all duration-300 font-medium"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
                        <path d="M11 13l9 -9" />
                        <path d="M15 4h5v5" />
                      </svg>
                      Live Demo
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CardProjects;
