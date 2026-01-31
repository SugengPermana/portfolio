"use client";

import Link from "next/link";
import { CodeIcon } from "lucide-react";
import ThemeColor from "./ThemeColor";

const MENU = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-base-100 border-b border-base-300">
      <div className="max-w-5xl mx-auto w-full px-4 py-4 flex items-center">

        {/* Left - Logo */}
        <div className="flex-1">
          <Link href="/" className="btn btn-ghost gap-2 text-base-content">
            <CodeIcon className="size-5" />
            <span className="text-lg font-bold font-mono uppercase tracking-wider">
              Sugeng
            </span>
          </Link>
        </div>

        {/* Center - Menu */}
        <div className="hidden md:flex gap-6 text-base-content">
          {MENU.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="btn btn-ghost font-semibold hover:opacity-100 transition"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Right - Theme */}
        <div className="flex-1 flex justify-end btn-ghost text-base-content">
          <ThemeColor />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
