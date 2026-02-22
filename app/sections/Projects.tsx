"use client";
import { SectionTitle } from "../components/SectionTitle";
import CardProjects, { UnifiedItem } from "../components/ui/Projects/CardProjects";
import { useState, useMemo } from "react";
import { projects, certificates } from "../lib/data";
import GradientText from "../components/ui/GradientText";

const ITEMS_PER_PAGE = 10;

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  const allItems: UnifiedItem[] = useMemo(() => {
    const projectItems: UnifiedItem[] = projects.map((project) => ({
      type: "project" as const,
      data: project,
    }));
    const certificateItems: UnifiedItem[] = certificates.map((cert) => ({
      type: "certificate" as const,
      data: cert,
    }));
    return [...projectItems, ...certificateItems];
  }, []);

  const filteredItems = useMemo(() => {
    if (activeCategory === "All") return allItems;
    if (activeCategory === "Certificates") {
      return allItems.filter((item) => item.type === "certificate");
    }
    return allItems.filter(
      (item) =>
        item.type === "project" &&
        (item.data as (typeof projects)[0]).category === activeCategory
    );
  }, [activeCategory, allItems]);

  const visibleItems = useMemo(
    () => filteredItems.slice(0, visibleCount),
    [filteredItems, visibleCount]
  );
  const hasMoreItems = visibleCount < filteredItems.length;
  const totalFiltered = filteredItems.length;

  const loadMore = () => {
    setVisibleCount((prev) => Math.min(prev + ITEMS_PER_PAGE, totalFiltered));
  };

  return (
    <section
      id="projects"
      className="font-poppins w-full max-w-6xl mx-auto py-10 px-6"
    >
      <div className="transition-all duration-1000 ease-out transform opacity-100 translate-y-0 ">
        <div className="text-center flex flex-col items-center justify-center ">
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            <SectionTitle text="Projects " className="mb-6" />
          </div>
          <h2
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
            className="text-3xl md:text-5xl font-bold mb-6 text-center mt-10 flex gap-1"
          >
            Featured
            <GradientText colors={["#5227FF", "#FF9FFC", "#B19EEF"]}>
              Projects
            </GradientText>
          </h2>
          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
            className="text-muted-foreground max-w-xl mx-auto mb-8 text-center"
          >
            A collection of my best work in web development, graphic design, and
            certificates I have earned.
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="400"
          className="flex flex-wrap justify-center gap-4"
        >
          <button
            onClick={() => {
              setActiveCategory("All");
              setVisibleCount(ITEMS_PER_PAGE);
            }}
            className={`px-6 py-2.5 rounded-full text-sm font-medium flex items-center gap-2 border shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:scale-105 transition-transform duration-300 ${
              activeCategory === "All"
                ? "text-primary-foreground bg-primary border-primary"
                : "bg-accent/10 text-muted-foreground hover:text-primary-foreground hover:bg-primary border-primary"
            }`}
          >
            All Projects
          </button>
          <button
            onClick={() => {
              setActiveCategory("Web Dev");
              setVisibleCount(ITEMS_PER_PAGE);
            }}
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
            onClick={() => {
              setActiveCategory("Design App");
              setVisibleCount(ITEMS_PER_PAGE);
            }}
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
          <button
            onClick={() => {
              setActiveCategory("Certificates");
              setVisibleCount(ITEMS_PER_PAGE);
            }}
            className={`px-6 py-2.5 rounded-full text-sm font-medium flex items-center gap-2 border shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:scale-105 transition-transform duration-300 ${
              activeCategory === "Certificates"
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
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            </span>
            Certificates
          </button>
        </div>
      </div>

      {visibleItems.length > 0 && (
        <div className="relative mt-10">
          <CardProjects items={visibleItems} />
        </div>
      )}

      {hasMoreItems && (
        <div className="mt-8 text-center">
          <p className="text-muted-foreground text-sm mb-2">
            Showing {visibleItems.length} of {totalFiltered} items
          </p>
          <button
            onClick={loadMore}
            className="px-6 py-2.5 rounded-full text-sm font-medium border border-primary bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            Load more
          </button>
        </div>
      )}

      {visibleItems.length > 0 && !hasMoreItems && totalFiltered > 0 && (
        <div className="mt-8 text-center">
          <p className="text-muted-foreground text-sm">
            Showing all {totalFiltered} items
          </p>
        </div>
      )}
    </section>
  );
};

export default Projects;
