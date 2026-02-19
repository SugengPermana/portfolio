"use client";
import { SectionTitle } from "../components/SectionTitle";
import CardProjects from "../components/ui/Projects/CardProjects";
import { useState, useMemo } from "react";
import { projects, certificates } from "../lib/data";
import GradientText from "../components/ui/GradientText";
import Image from "next/image";
import { useCallback, useEffect } from "react";

const ITEMS_PER_PAGE = 10;

type ItemType = "project" | "certificate";

interface UnifiedItem {
  type: ItemType;
  data: (typeof projects)[0] | (typeof certificates)[0];
}

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedCertificate, setSelectedCertificate] = useState<
    (typeof certificates)[0] | null
  >(null);

  // Combine projects and certificates into unified items
  const allItems: UnifiedItem[] = useMemo(() => {
    const projectItems: UnifiedItem[] = projects.map((project) => ({
      type: "project" as ItemType,
      data: project,
    }));

    const certificateItems: UnifiedItem[] = certificates.map((cert) => ({
      type: "certificate" as ItemType,
      data: cert,
    }));

    return [...projectItems, ...certificateItems];
  }, []);

  // Filter items based on category
  const filteredItems = useMemo(() => {
    if (activeCategory === "All") {
      return allItems;
    } else if (activeCategory === "Certificates") {
      return allItems.filter((item) => item.type === "certificate");
    } else {
      return allItems.filter(
        (item) =>
          item.type === "project" &&
          (item.data as (typeof projects)[0]).category === activeCategory
      );
    }
  }, [activeCategory, allItems]);

  // Get visible items (max ITEMS_PER_PAGE)
  const visibleItems = useMemo(
    () => filteredItems.slice(0, ITEMS_PER_PAGE),
    [filteredItems]
  );

  // Separate visible items into projects and certificates
  const visibleProjects = useMemo(
    () =>
      visibleItems
        .filter((item) => item.type === "project")
        .map((item) => item.data as (typeof projects)[0]),
    [visibleItems]
  );

  const visibleCertificates = useMemo(
    () =>
      visibleItems
        .filter((item) => item.type === "certificate")
        .map((item) => item.data as (typeof certificates)[0]),
    [visibleItems]
  );

  const hasMoreItems = filteredItems.length > ITEMS_PER_PAGE;

  const closeCertificateModal = useCallback(() => {
    setSelectedCertificate(null);
  }, []);

  // Close certificate modal on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeCertificateModal();
    };
    if (selectedCertificate) {
      document.addEventListener("keydown", handleKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [selectedCertificate, closeCertificateModal]);

  return (
    <section
      id="projects"
      className="font-poppins w-full max-w-6xl mx-auto py-10 px-6"
    >
      <div className="transition-all duration-1000 ease-out transform opacity-100 translate-y-0 ">
        <div className="text-center flex flex-col items-center justify-center ">
          {/* judul Projects */}
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
            A collection of my best work in web development, graphic design, and certificates I have earned.
          </p>
        </div>
        {/* fitur search */}
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="400"
          className="flex flex-wrap justify-center gap-4"
        >
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
          {/*  ganti web dev*/}
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
          {/* ganti Design App */}
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
          {/* ganti Certificares */}
          <button
            onClick={() => setActiveCategory("Certificates")}
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

      {/* =======Projects Grid===== */}
      {visibleProjects.length > 0 && (
        <div className="relative mt-10">
          <CardProjects data={visibleProjects} />
        </div>
      )}

      {/* =======Certificates Grid===== */}
      {visibleCertificates.length > 0 && (
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="100"
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${
            visibleProjects.length > 0 ? "mt-10" : "mt-10"
          }`}
        >
          {visibleCertificates.map((certificate, index) => (
            <div
              key={index}
              onClick={() => setSelectedCertificate(certificate)}
              className="group relative rounded-2xl overflow-hidden cursor-pointer border border-white/10 bg-neutral-900 hover:border-primary/50 transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-primary/20"
            >
              {/* Full Image Certificate */}
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                <Image
                  src={certificate.image}
                  alt={certificate.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="px-4 py-2 rounded-lg bg-primary/90 text-primary-foreground font-medium">
                      View Details
                    </div>
                  </div>
                </div>
              </div>
              {/* Certificate Title */}
              <div className="p-4">
                <h3 className="text-lg font-bold text-white mb-1 line-clamp-2">
                  {certificate.title}
                </h3>
                <p className="text-sm text-gray-400">{certificate.date}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Progress indicator */}
      {hasMoreItems && (
        <div className="mt-8 text-center">
          <p className="text-muted-foreground text-sm">
            Showing {ITEMS_PER_PAGE} of {filteredItems.length} items
          </p>
          <div className="mt-4 flex justify-center">
            <div className="w-full max-w-md h-1 bg-border rounded-full overflow-hidden">
              <div
                className="h-full bg-primary transition-all duration-500"
                style={{
                  width: `${(ITEMS_PER_PAGE / filteredItems.length) * 100}%`,
                }}
              />
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            Scroll down to see more items
          </p>
        </div>
      )}

      <div className="mt-12 text-center">
        <p
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="100"
          className="text-muted-foreground text-sm mb-30"
        >
          {!hasMoreItems &&
            `Showing ${filteredItems.length} of ${allItems.length} items`}
        </p>
      </div>

      {/* ====== Certificate Detail Modal ====== */}
      {selectedCertificate && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={closeCertificateModal}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

          {/* Modal Content */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative z-10 w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-neutral-900 border border-white/10 shadow-2xl shadow-purple-900/30 animate-in zoom-in-95 duration-200"
          >
            {/* Close button */}
            <button
              onClick={closeCertificateModal}
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

            {/* Certificate Image */}
            <div className="relative w-full h-80">
              <Image
                src={selectedCertificate.image}
                alt={selectedCertificate.title}
                fill
                className="object-cover rounded-t-2xl"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-neutral-900 via-neutral-900/40 to-transparent" />
            </div>

            {/* Certificate Info */}
            <div className="p-6 md:p-8 -mt-12 relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                {selectedCertificate.title}
              </h2>

              {/* Date and Issuer */}
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <div className="flex items-center gap-2 text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  <span className="text-sm">{selectedCertificate.date}</span>
                </div>
                {selectedCertificate.issuer && (
                  <div className="flex items-center gap-2 text-gray-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 7h-4V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2H4a1 1 0 0 0-1 1v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a1 1 0 0 0-1-1z" />
                    </svg>
                    <span className="text-sm">{selectedCertificate.issuer}</span>
                  </div>
                )}
              </div>

              {/* Description */}
              <p className="text-gray-400 text-base leading-relaxed mb-6">
                {selectedCertificate.description}
              </p>

              {/* What I Learned */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
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
                  What I Learned
                </h3>
                <ul className="space-y-2">
                  {selectedCertificate.learned.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-gray-300"
                    >
                      <span className="mt-1.5 shrink-0">
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
                          className="text-primary"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                      <span className="text-sm md:text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
