"use client";
import Link from "next/link";
import { IconArrowRight, IconDownload } from "@tabler/icons-react";

const Home = () => {
  return (
    <section id="home" className="min-h-screen items-center justify-center">
      <div className="w-full max-w-5xl mx-auto pt-10 pb-10 px-4 flex flex-col items-center justify-center text-center relative z-10">
        <div className="mb-6">
          <span className="font-chakra px-4 py-1.5 rounded-full border border-primary/20 bg-primary-content text-xs tracking-widest text-primary uppercase backdrop-blur-md">
            Portfolio 2026 • Edition
          </span>
        </div>
        <div className="relative mb-8">
          <div className="absolute -inset-10 from-purple-500/20 to-blue-500/20 blur-[60px] rounded-full pointer-events-none"></div>
          <h4 className="relative text-5xl md:text-7xl  text-primary-content tracking-tighter leading-[1.1] uppercase">
            Sugeng
            <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 via-pink-500 to-orange-500">
              .DEV
            </span>
          </h4>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <Link
            href="#resume"
            target="_blank"
            className="group relative inline-flex items-center gap-3 px-8 py-3 bg-white text-black rounded-full font-bold text-sm tracking-wide transition-transform hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] uppercase"
          >
            <IconDownload className="h-4 w-4" />
            <span>Open cv</span>
          </Link>
          <Link
            href="#contact"
            target="_blank"
            className="group relative inline-flex items-center gap-3 px-8 py-3 rounded-full border border-white/10 bg-white/5 text-white font-bold text-sm tracking-wide transition-all hover:scale-105 hover:bg-white/10 hover:border-white/30 uppercase"
          >
            <span>Lets Work Together</span>
            <IconArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
