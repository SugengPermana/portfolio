"use client";
import { useState } from "react";
import { techTools } from "../../../lib/data";

const TechTools = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div>
      {/* title */}
      <div  data-aos="fade-up"
              data-aos-duration="1000" data-aos-delay="100" className="transition-all duration-1000 ease-out transform opacity-100 translate-y-0">
        <h3 className="text-2xl md:text-3xl font-bold mb-8 text-foreground border-b border-foreground/20 pb-4">
          Technologies I&apos;ve worked with
        </h3>
      </div>
      {/* tech tools */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {techTools.map((tool, index) => {
          const isHovered = hoveredIndex === index;
          return (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={((index % 5) + 1) * 100}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="flex flex-col items-center justify-center p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/20 cursor-pointer group"
            >
              <div
                className="mb-4 transition-all duration-300 group-hover:scale-110"
                style={{ color: isHovered ? tool.color : "#9ca3af" }}
              >
                <tool.icon className="h-18 w-18" stroke={2} />
              </div>
              <span
                className="text-sm font-medium transition-colors duration-300"
                style={{ color: isHovered ? tool.color : "#9ca3af" }}
              >
                {tool.name}
              </span>
              {/* progress bar with percentage */}
              <div className="w-full mt-4 flex items-center gap-2">
                <div className="flex-1 bg-white/10 rounded-full h-2 overflow-hidden">
                  <div
                    className="h-full rounded-full transition-colors duration-300"
                    style={{
                      width: `${tool.progress}%`,
                      backgroundColor: isHovered ? tool.color : "#8b5cf6",
                    }}
                    data-aos="slide-right"
                    data-aos-duration="1000"
                    data-aos-delay={((index % 5) + 1) * 200}
                  ></div>
                </div>
                <span
                  className="text-xs font-semibold min-w-[32px] text-right transition-colors duration-300"
                  style={{ color: isHovered ? tool.color : "#9ca3af" }}
                >
                  {tool.progress}%
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TechTools;
