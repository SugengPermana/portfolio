"use client";
import Image from "next/image";
import Link from "next/link";
import { projects } from "../../lib/data";

const CardProjects = ({ data }: { data: typeof projects }) => {
  return (
    // grid card
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
      {data.map((project, index) => (
        <div
          key={index}
          className="transition-all duration-1000 ease-out transform opacity-100 translate-y-0 "
        >
          <div className="group rounded-2xl bg-neutral-900 border border-white/10 overflow-hidden flex flex-col h-full  transition-colors duration-300 hover:border-blue-500/30">
            <div className="relative h-48 overflow-hidden cursor-pointer">
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
  );
};

export default CardProjects;
