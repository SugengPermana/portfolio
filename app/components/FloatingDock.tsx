"use client";

import React, { useState } from "react";
import { Dock, DockIcon } from "./ui/dock";
import { AnimatedThemeToggler } from "./ui/animated-theme-toggler";
import { AnimatePresence, motion } from "motion/react";

export const FloatingDock = ({
  items,
  desktopClassName,
  mobileClassName,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  desktopClassName?: string;
  mobileClassName?: string;
}) => {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <Dock direction="middle">
        {items.map((item) => (
          <DockIcon
            key={item.title}
            className="relative"
            onMouseEnter={() => setHovered(item.title)}
            onMouseLeave={() => setHovered(null)}
          >
            <AnimatePresence>
              {hovered === item.title && (
                <motion.div
                  initial={{ opacity: 0, y: 10, x: "-50%" }}
                  animate={{ opacity: 1, y: -10, x: "-50%" }}
                  exit={{ opacity: 0, y: 2, x: "-50%" }}
                  className="absolute -top-8 left-1/2 w-fit whitespace-nowrap rounded-md border border-gray-200 bg-gray-100 px-2 py-0.5 text-xs text-neutral-700 dark:border-neutral-900 dark:bg-neutral-800 dark:text-white"
                >
                  {item.title}
                </motion.div>
              )}
            </AnimatePresence>
            <a
              href={item.href}
              className="flex items-center justify-center w-full h-full text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
            >
              {item.icon}
            </a>
          </DockIcon>
        ))}
        {/* Separator or just append Theme Toggler */}
        <DockIcon
          className="relative"
          onMouseEnter={() => setHovered("Theme")}
          onMouseLeave={() => setHovered(null)}
        >
          <AnimatePresence>
            {hovered === "Theme" && (
              <motion.div
                initial={{ opacity: 0, y: 10, x: "-50%" }}
                animate={{ opacity: 1, y: -10, x: "-50%" }}
                exit={{ opacity: 0, y: 2, x: "-50%" }}
                className="absolute -top-8 left-1/2 w-fit whitespace-nowrap rounded-md border border-gray-200 bg-gray-100 px-2 py-0.5 text-xs text-neutral-700 dark:border-neutral-900 dark:bg-neutral-800 dark:text-white"
              >
                Switch Theme
              </motion.div>
            )}
          </AnimatePresence>
          <AnimatedThemeToggler className="w-full h-full flex items-center justify-center text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors" />
        </DockIcon>
      </Dock>
    </div>
  );
};
