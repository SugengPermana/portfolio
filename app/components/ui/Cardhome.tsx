"use client";
import { useState } from "react";

const techItems = [
  {
    label: "Next.js",
    paths: [
      "M0 0h24v24H0z",
      "M9 15v-6l7.745 10.65a9 9 0 1 1 2.255 -1.993",
      "M15 12v-3",
    ],
  },
  {
    label: "React",
    paths: [
      "M0 0h24v24H0z",
      "M6.306 8.711c-2.602 .723 -4.306 1.926 -4.306 3.289c0 2.21 4.477 4 10 4c.773 0 1.526 -.035 2.248 -.102",
      "M17.692 15.289c2.603 -.722 4.308 -1.926 4.308 -3.289c0 -2.21 -4.477 -4 -10 -4c-.773 0 -1.526 .035 -2.25 .102",
      "M6.305 15.287c-.676 2.615 -.485 4.693 .695 5.373c1.913 1.105 5.703 -1.877 8.464 -6.66c.387 -.67 .733 -1.339 1.036 -2",
      "M17.694 8.716c.677 -2.616 .487 -4.696 -.694 -5.376c-1.913 -1.105 -5.703 1.877 -8.464 6.66c-.387 .67 -.733 1.34 -1.037 2",
      "M12 5.424c-1.925 -1.892 -3.82 -2.766 -5 -2.084c-1.913 1.104 -1.226 5.877 1.536 10.66c.386 .67 .793 1.304 1.212 1.896",
      "M12 18.574c1.926 1.893 3.821 2.768 5 2.086c1.913 -1.104 1.226 -5.877 -1.536 -10.66c-.375 -.65 -.78 -1.283 -1.212 -1.897",
      "M11.5 12.866a1 1 0 1 0 1 -1.732a1 1 0 0 0 -1 1.732",
    ],
  },
  {
    label: "Tailwind",
    paths: [
      "M0 0h24v24H0z",
      "M11.667 6c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 2 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968m-4 6.5c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 1.975 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968",
    ],
  },
  {
    label: "TypeScript",
    paths: [
      "M0 0h24v24H0z",
      "M15 17.5c.32 .32 .754 .5 1.207 .5h.543c.69 0 1.25 -.56 1.25 -1.25v-.25a1.5 1.5 0 0 0 -1.5 -1.5a1.5 1.5 0 0 1 -1.5 -1.5v-.25c0 -.69 .56 -1.25 1.25 -1.25h.543c.453 0 .887 .18 1.207 .5",
      "M9 12h4",
      "M11 12v6",
      "M21 19v-14a2 2 0 0 0 -2 -2h-14a2 2 0 0 0 -2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2 -2",
    ],
  },
  {
    label: "Motion",
    paths: [
      "M0 0h24v24H0z",
      "M12 12l-8 -8v16l16 -16v16l-4 -4",
      "M20 12l-8 8l-4 -4",
    ],
  },
];

const Cardhome = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="relative mx-auto flex w-full max-w-xs items-center justify-center mb-10">
      <div className="flex gap-4 mx-auto w-full items-center justify-center mt-10">
        {techItems.map((item, index) => (
          <div
            key={item.label}
            className="relative flex flex-col items-center"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Tooltip */}
            <span
              className={`absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap px-2.5 py-1 rounded-md text-[11px] font-semibold
                bg-foreground text-background shadow-lg
                transition-all duration-300 ease-out pointer-events-none
                ${
                  hoveredIndex === index
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 translate-y-2 scale-90"
                }`}
            >
              {item.label}
              {/* Arrow */}
              <span className="absolute left-1/2 -translate-x-1/2 -bottom-1 w-2 h-2 bg-foreground rotate-45" />
            </span>

            {/* Icon Button */}
            <button className="group/icon">
              <div className="perspective-[200px] transform-3d">
                <div
                  className={`relative mx-auto h-12 w-12 rounded-lg bg-linear-to-b from-neutral-200 to-neutral-100 p-[3px] transition-all duration-300 dark:from-neutral-800 dark:to-neutral-950
                  ${
                    hoveredIndex === index
                      ? "scale-110 shadow-lg shadow-purple-500/30"
                      : "hover:scale-105"
                  }`}
                >
                  <div className="relative z-20 flex h-full w-full items-center justify-center overflow-hidden rounded-[5px] bg-white dark:bg-black">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      className={`w-7 h-7 transition-colors duration-300 ${
                        hoveredIndex === index
                          ? "text-cyan-400"
                          : "text-current"
                      }`}
                    >
                      {item.paths.map((d, i) => (
                        <path
                          key={i}
                          d={d}
                          {...(i === 0 ? { stroke: "none", fill: "none" } : {})}
                        />
                      ))}
                    </svg>
                  </div>
                  {/* Bottom glow */}
                  <div className="absolute inset-x-0 bottom-0 z-30 mx-auto h-3 w-full rounded-full bg-neutral-300 opacity-50 blur-md dark:bg-neutral-600" />
                  <div className="absolute inset-x-0 bottom-0 mx-auto h-px w-[60%] bg-linear-to-r from-transparent via-cyan-500 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 mx-auto h-[6px] w-[60%] bg-linear-to-r from-transparent via-cyan-600 to-transparent blur-sm" />
                </div>
              </div>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cardhome;
