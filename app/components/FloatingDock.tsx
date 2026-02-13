"use client";

import React, { useState, useEffect } from "react";
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
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Show dock after scrolling down 100px
      if (window.scrollY > 100) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 100, x: "-50%" }}
          animate={{ opacity: 1, y: 0, x: "-50%" }}
          exit={{ opacity: 0, y: 100, x: "-50%" }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 left-1/2 z-50"
        >
          <Dock direction="middle">
            {items.map((item) => (
              <DockIcon
                key={item.title}
                className="relative"
                onMouseEnter={() => setHovered(item.title)}
                onMouseLeave={() => setHovered(null)}
                href={item.href}
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
                <div className="flex items-center justify-center w-full h-full text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors">
                  {item.icon}
                </div>
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
        </motion.div>
      )}
    </AnimatePresence>
  );
};
