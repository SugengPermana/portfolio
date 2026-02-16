"use client";
import Image from "next/image";
import { SocialLinks } from "../components/SocialLinks";
import { SectionTitle } from "../components/SectionTitle";
import { AnimatedShinyButton } from "../components/ui/animated-shiny-button";
import LiveButton from "../components/ui/live-button";
import Cardhome from "../components/ui/Cardhome";
import TypingGlitch from "../components/ui/TypingGlitch";

const Home = () => {
  return (
    <section id="home" className="w-full max-w-7xl mx-auto pt-10 mb-20">
      <div className="font-chakra w-full max-w-5xl mx-auto pb-10 px-4 flex flex-col items-center justify-center text-center relative z-10 mb-15 md:mb-20 md:pt-20 lg:pt-15 lg:mb-5">
        <div className="mb-6">
          <SectionTitle text="No Debug, No Money" />
        </div>
        {/* nama gw */}
        <div className="relative mb-2">
          <h4 className="relative text-4xl md:text-7xl sm:text-5xl text-foreground tracking-tighter leading-[1.1] uppercase">
            Sugeng
            <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 via-pink-500 to-orange-500">
              .DEV
            </span>
          </h4>
        </div>
        {/* deskripsi */}
        <div className="font-chakra relative mb-6">
          <p className="text-muted-foreground text-lg font-medium">
            <TypingGlitch />
          </p>
        </div>
        {/* button */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <AnimatedShinyButton url="#resume" className="uppercase rounded-full">
            Open Cv
          </AnimatedShinyButton>
          <LiveButton
            url="#contact"
            text="Lets Work Together"
            className="uppercase rounded-full"
          />
        </div>
        {/* card home */}
        <Cardhome />
      </div>

      {/* card besar profile */}
      <div
        className="font-chakra group/card w-full max-w-8xl mx-auto p-4 md:p-8 rounded-4xl
        border border-border bg-card shadow-2xl shadow-purple-900/20

        flex flex-col md:flex-row items-center gap-6 md:gap-10
        relative overflow-hidden transition-all duration-500 hover:border-purple-500/30 hover:shadow-purple-500/20"
      >
        <div className="absolute inset-0 bg-linear-to-br from-purple-600/10 via-transparent to-blue-600/10 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
        <div className="relative shrink-0 z-10 order-2 md:order-1 w-full md:w-auto flex flex-col md:flex-row justify-center items-center gap-6">
          <div className="order-2 md:order-1 flex flex-row md:flex-col gap-4">
            <SocialLinks className="flex-row md:flex-col" />
          </div>
          <div className="relative order-1 md:order-2">
            <div className="w-70 h-70 sm:w-48 sm:h-48 md:w-60 md:h-60 rounded-2xl p-[2px] bg-linear-to-br from-purple-500 via-blue-500 to-purple-400 shadow-lg shadow-purple-500/30 group">
              <div className="w-full h-full rounded-[14px] overflow-hidden bg-gray-900">
                {/* foto profile di sini */}
                <Image
                  src="/new.png"
                  loading="eager"
                  alt="Profile"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:brightness-110"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="order-1 md:order-2 text-left space-y-4 relative z-10 w-full">
          <div className="relative flex justify-start">
            <span className="relative px-4 py-2 text-xs md:text-xs font-medium text-foreground/90 rounded-xl inline-flex items-center gap-2 backdrop-blur-md bg-background/50 border border-border shadow-lg">
              <span className="text-yellow-300">👋</span>
              <span>Hallo zusammen!</span>
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            <span className="text-transparent bg-clip-text bg-linear-to-r from-white via-purple-100 to-purple-300 drop-shadow-sm">
              Sugeng Permana Desembry
            </span>
          </h1>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start gap-3 text-muted-foreground text-lg font-medium">
            <div className="flex items-center gap-2">
              <div className="relative p-2 rounded-full bg-linear-to-br from-purple-500/20 to-blue-500/20">
                {/* icon koper di sini */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="#a600ff"
                  className="icon icon-tabler icons-tabler-filled icon-tabler-briefcase"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M22 13.478v4.522a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-4.522l.553 .277a20.999 20.999 0 0 0 18.897 -.002l.55 -.275zm-8 -11.478a3 3 0 0 1 3 3v1h2a3 3 0 0 1 3 3v2.242l-1.447 .724a19.002 19.002 0 0 1 -16.726 .186l-.647 -.32l-1.18 -.59v-2.242a3 3 0 0 1 3 -3h2v-1a3 3 0 0 1 3 -3h4zm-2 8a1 1 0 0 0 -1 1a1 1 0 1 0 2 .01c0 -.562 -.448 -1.01 -1 -1.01zm2 -6h-4a1 1 0 0 0 -1 1v1h6v-1a1 1 0 0 0 -1 -1z" />
                </svg>
              </div>
              <span>Web Developer</span>
            </div>
            <span className="hidden sm:block w-1 h-1 rounded-full bg-muted-foreground"></span>
            <div className="flex flex-wrap justify-start gap-2">
              <span className="px-2.5 py-1 md:px-3 md:py-1.5 rounded-lg text-cyan-500 dark:text-cyan-300 bg-accent/10 border border-border backdrop-blur-sm cursor-pointer text-xs md:text-sm font-medium">
                {/* belum di kasih hover animasi */}
                Frontend Dev
              </span>
              <span className="px-2.5 py-1 md:px-3 md:py-1.5 rounded-lg text-purple-600 dark:text-purple-400 bg-accent/10 border border-border backdrop-blur-sm cursor-pointer text-xs md:text-sm font-medium">
                Backend Dev
              </span>
              <span className="px-2.5 py-1 md:px-3 md:py-1.5 rounded-lg text-blue-500 dark:text-blue-300 bg-accent/10 border border-border backdrop-blur-sm cursor-pointer text-xs md:text-sm font-medium">
                AI Automation
              </span>
            </div>
          </div>
          <div className="max-w-lg">
            <div className="inline-flex items-center gap-3 px-3 py-2 rounded-lg bg-card border border-border">
              {/* buletan warna warni di sini */}
              <div className="w-2 h-2 rounded-full"></div>
              <div className="text-sm text-foreground">
                Solving <span className="text-muted-foreground">•</span>
                <span className="text-cyan-500 dark:text-cyan-400 font-mono">
                  Line 2005
                </span>
              </div>
              {/* panah berputar di sini */}
              <div className="text-xs text-muted-foreground">⟳</div>
            </div>
          </div>
          <div className="pt-2 flex items-center justify-start gap-2 text-sm text-muted-foreground font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="#a600ff"
              className="icon icon-tabler icons-tabler-filled icon-tabler-map-pin"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6" />
            </svg>
            <span>Bogor, Jawa Barat, Indonesia</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
