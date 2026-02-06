"use client";
/**
 * Note: Use position fixed according to your needs
 * Desktop navbar is better positioned at the bottom
 * Mobile navbar is better positioned at bottom right.
 **/

import { cn } from "../lib/utils";
import { IconLayoutNavbarCollapse, IconPalette, IconX } from "@tabler/icons-react";
import {
  AnimatePresence,
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";

import { useEffect, useRef, useState } from "react";

const THEMES = [
  "light",
  "dark",
  "cupcake",
  "bumblebee",
  "emerald",
  "corporate",
  "valentine",
  "halloween",
  "garden",
  "forest",
  "lofi",
  "pastel",
  "fantasy",
  "luxury",
  "dracula",
  "cmyk",
  "autumn",
  "business",
  "acid",
  "lemonade",
  "night",
  "coffee",
  "winter",
];

export const FloatingDock = ({
  items,
  desktopClassName,
  mobileClassName,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  desktopClassName?: string;
  mobileClassName?: string;
}) => {
  return (
    <>
      <FloatingDockDesktop items={items} className={desktopClassName} />
      <FloatingDockMobile items={items} className={mobileClassName} />
    </>
  );
};

const FloatingDockMobile = ({
  items,
  className,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  className?: string;
}) => {
  const [open, setOpen] = useState(false);
  const [showThemes, setShowThemes] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "forest";
    }
    return "forest";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme);
    setShowThemes(false);
  };

  return (
    <>
      {/* Theme Modal */}
      <AnimatePresence>
        {showThemes && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowThemes(false)}
              // Ganti Ukuran layar Mobile search aja Min-[sesuai desktop]
              className="fixed inset-0 bg-black/50 z-[60] min-[580px]:hidden"
            />
            {/* Theme Panel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              // ganti ukuran layar mobile
              className="fixed bottom-24 right-6 z-[70] w-64 max-h-96 bg-gray-50 dark:bg-neutral-900 rounded-2xl shadow-2xl overflow-hidden min-[580px]:hidden"
            >
              <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-neutral-800">
                <h3 className="font-semibold text-neutral-800 dark:text-neutral-200">Choose Theme</h3>
                <button
                  onClick={() => setShowThemes(false)}
                  className="p-1 hover:bg-gray-200 dark:hover:bg-neutral-800 rounded-full transition-colors"
                >
                  <IconX className="h-5 w-5 text-neutral-600 dark:text-neutral-400" />
                </button>
              </div>
              <div className="overflow-y-auto max-h-80 p-2">
                {THEMES.map((t) => (
                  <button
                    key={t}
                    onClick={() => handleThemeChange(t)}
                    className={cn(
                      "w-full flex items-center justify-between p-3 rounded-lg mb-1 transition-colors",
                      theme === t
                        ? "bg-blue-500 text-white"
                        : "hover:bg-gray-200 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-300 "
                    )}
                  >
                    <span className="capitalize font-medium">{t}</span>
                    <div className="flex gap-1" data-theme={t}>
                      <span className="w-3 h-5 rounded-sm bg-primary" />
                      <span className="w-3 h-5 rounded-sm bg-secondary" />
                      <span className="w-3 h-5 rounded-sm bg-accent" />
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Floating Dock */}
      <div className={cn("fixed bottom-6 right-6 z-50 block min-[580px]:hidden", className)}>
        <AnimatePresence>
          {open && (
            <motion.div
              layoutId="nav"
              className="absolute right-0 bottom-full mb-2 flex flex-col gap-2"
            >
              {items.map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  exit={{
                    opacity: 0,
                    x: 20,
                    transition: {
                      delay: idx * 0.05,
                    },
                  }}
                  transition={{ delay: (items.length - 1 - idx) * 0.05 }}
                >
                  <a
                    href={item.href}
                    key={item.title}
                    onClick={() => setOpen(false)}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-50 dark:bg-neutral-900 shadow-lg"
                  >
                    <div className="h-4 w-4 text-neutral-700 dark:text-neutral-300">{item.icon}</div>
                  </a>
                </motion.div>
              ))}
              {/* Theme Button in Menu */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                exit={{
                  opacity: 0,
                  x: 20,
                }}
                transition={{ delay: items.length * 0.05 }}
              >
                <button
                  onClick={() => {
                    setShowThemes(true);
                    setOpen(false);
                  }}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-50 dark:bg-neutral-900 shadow-lg"
                >
                  <IconPalette className="h-4 w-4 text-neutral-600 dark:text-neutral-400" />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        <button
          onClick={() => setOpen(!open)}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-50 dark:bg-neutral-800 shadow-lg"
        >
          <IconLayoutNavbarCollapse className="h-6 w-6 text-neutral-500 dark:text-neutral-400" />
        </button>
      </div>
    </>
  );
};

const FloatingDockDesktop = ({
  items,
  className,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  className?: string;
}) => {
  let mouseX = useMotionValue(Infinity);
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "forest";
    }
    return "forest";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "fixed bottom-6 left-1/2 -translate-x-1/2 z-50 hidden min-[580px]:flex h-16 items-end gap-4 rounded-2xl bg-gray-50 px-4 pb-3 dark:bg-neutral-900 shadow-xl",
        className,
      )}
    >
      {items.map((item) => (
        <IconContainer mouseX={mouseX} key={item.title} {...item} />
      ))}
      {/* Theme Switcher for Desktop */}
      <ThemeSwitcherDesktop mouseX={mouseX} theme={theme} setTheme={setTheme} />
    </motion.div>
  );
};

function ThemeSwitcherDesktop({
  mouseX,
  theme,
  setTheme,
}: {
  mouseX: MotionValue;
  theme: string;
  setTheme: (theme: string) => void;
}) {
  let ref = useRef<HTMLDivElement>(null);
  const [showThemes, setShowThemes] = useState(false);

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  let widthTransform = useTransform(distance, [-150, 0, 150], [40, 60, 40]);
  let heightTransform = useTransform(distance, [-150, 0, 150], [40, 60, 40]);

  let widthTransformIcon = useTransform(distance, [-150, 0, 150], [20, 28, 20]);
  let heightTransformIcon = useTransform(distance, [-150, 0, 150], [20, 28, 20]);

  let width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  let height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  let widthIcon = useSpring(widthTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  let heightIcon = useSpring(heightTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const [hovered, setHovered] = useState(false);

  return (
    <div className="relative">
      <motion.div
        ref={ref}
        style={{ width, height }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => setShowThemes(!showThemes)}
        className="relative flex aspect-square items-center justify-center rounded-full bg-gray-200 dark:bg-neutral-800"
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: 2, x: "-50%" }}
              className="absolute -top-8 left-1/2 w-fit rounded-md border border-gray-200 bg-gray-100 px-2 py-0.5 text-xs whitespace-pre text-neutral-700 dark:border-neutral-900 dark:bg-neutral-800 dark:text-white"
            >
              Theme
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          style={{ width: widthIcon, height: heightIcon }}
          className="flex items-center justify-center"
        >
          <IconPalette className="text-neutral-700 dark:text-neutral-300" />
        </motion.div>
      </motion.div>

      {/* Theme Dropdown */}
      <AnimatePresence>
        {showThemes && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowThemes(false)}
              className="fixed inset-0 z-[60]"
            />
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 z-[70] w-64 max-h-96 bg-gray-50 dark:bg-neutral-900 rounded-2xl shadow-2xl overflow-hidden"
            >
              <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-neutral-800">
                <h3 className="font-semibold text-neutral-800 dark:text-neutral-200">Choose Theme</h3>
                <button
                  onClick={() => setShowThemes(false)}
                  className="p-1 hover:bg-gray-200 dark:hover:bg-neutral-800 rounded-full transition-colors"
                >
                  <IconX className="h-5 w-5 text-neutral-600 dark:text-neutral-400" />
                </button>
              </div>
              <div className="overflow-y-auto max-h-80 p-2">
                {THEMES.map((t) => (
                  <button
                    key={t}
                    onClick={() => {
                      setTheme(t);
                      setShowThemes(false);
                    }}
                    className={cn(
                      "w-full flex items-center justify-between p-3 rounded-lg mb-1 transition-colors cursor-pointer",
                      theme === t
                        ? "bg-blue-500 text-white"
                        : "hover:bg-gray-200 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-300"
                    )}
                  >
                    <span className="capitalize font-medium">{t}</span>
                    <div className="flex gap-1" data-theme={t}>
                      <span className="w-3 h-5 rounded-sm bg-primary" />
                      <span className="w-3 h-5 rounded-sm bg-secondary" />
                      <span className="w-3 h-5 rounded-sm bg-accent" />
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

function IconContainer({
  mouseX,
  title,
  icon,
  href,
}: {
  mouseX: MotionValue;
  title: string;
  icon: React.ReactNode;
  href: string;
}) {
  let ref = useRef<HTMLDivElement>(null);

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

    return val - bounds.x - bounds.width / 2;
  });

  let widthTransform = useTransform(distance, [-150, 0, 150], [40, 60, 40]);
  let heightTransform = useTransform(distance, [-150, 0, 150], [40, 60, 40]);

  let widthTransformIcon = useTransform(distance, [-150, 0, 150], [20, 28, 20]);
  let heightTransformIcon = useTransform(
    distance,
    [-150, 0, 150],
    [20, 28, 20],
  );

  let width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  let height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  let widthIcon = useSpring(widthTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  let heightIcon = useSpring(heightTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const [hovered, setHovered] = useState(false);

  return (
    <a href={href}>
      <motion.div
        ref={ref}
        style={{ width, height }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative flex aspect-square items-center justify-center rounded-full bg-gray-200 dark:bg-neutral-800"
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: 2, x: "-50%" }}
              className="absolute -top-8 left-1/2 w-fit rounded-md border border-gray-200 bg-gray-100 px-2 py-0.5 text-xs whitespace-pre text-neutral-700 dark:border-neutral-900 dark:bg-neutral-800 dark:text-white"
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          style={{ width: widthIcon, height: heightIcon }}
          className="flex items-center justify-center text-neutral-700 dark:text-neutral-300"
        >
          {icon}
        </motion.div>
      </motion.div>
    </a>
  );
}
