 "use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const GREETINGS = [
  "Halo",
  "Hello",
  "Bonjour",
  "Hallo",
  "你好",
  "Здравствуйте",
  "مرحبا",
  "Ciao",
] as const;

type Step = "greeting" | "progress" | "done" | "exit";

const GREETING_INTERVAL = 400; // ms
const PROGRESS_DURATION = 400; // ms
const FINAL_VISIBLE_DURATION = 800; // ms

const IntroAnimation: React.FC = () => {
  const [step, setStep] = useState<Step>("greeting");
  const [greetingIndex, setGreetingIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  // Lock/unlock scroll based on visibility
  useEffect(() => {
    if (!visible) {
      document.body.style.overflow = "auto";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [visible]);

  // Greeting sequence
  useEffect(() => {
    if (!visible || step !== "greeting") return;

    const isLast = greetingIndex >= GREETINGS.length - 1;
    const timeoutId = window.setTimeout(() => {
      if (isLast) {
        setStep("progress");
      } else {
        setGreetingIndex((prev) => Math.min(prev + 1, GREETINGS.length - 1));
      }
    }, GREETING_INTERVAL);

    return () => window.clearTimeout(timeoutId);
  }, [visible, step, greetingIndex]);

  // Progress bar filling from 0 to 100
  useEffect(() => {
    if (!visible || step !== "progress") return;

    let frameId: number;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const ratio = Math.min(1, elapsed / PROGRESS_DURATION);
      const nextProgress = ratio * 100;
      setProgress(nextProgress);

      if (ratio < 1) {
        frameId = window.requestAnimationFrame(tick);
      } else {
        setStep("done");
      }
    };

    frameId = window.requestAnimationFrame(tick);

    return () => window.cancelAnimationFrame(frameId);
  }, [visible, step]);

  // After "Hello Sugeng", schedule exit
  useEffect(() => {
    if (!visible || step !== "done") return;

    const timeoutId = window.setTimeout(() => {
      setStep("exit");
      setVisible(false);
    }, FINAL_VISIBLE_DURATION);

    return () => window.clearTimeout(timeoutId);
  }, [visible, step]);

  if (!visible && step === "exit") {
    return null;
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-9999 bg-black flex items-center justify-center"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="flex flex-col items-center justify-center space-y-6 text-center">
            {step === "greeting" && (
              <motion.p
                key={GREETINGS[greetingIndex]}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="text-3xl md:text-4xl font-semibold tracking-tight text-white"
              >
                {GREETINGS[greetingIndex]}
              </motion.p>
            )}

            {step === "progress" && (
              <div className="flex w-full max-w-xs flex-col items-center gap-4">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-300">
                  Loading
                </p>
                <div className="relative h-2 w-full overflow-hidden rounded-full bg-neutral-800">
                  <div
                    className="h-full rounded-full bg-linear-to-r from-cyan-400 via-sky-500 to-purple-500 shadow-[0_0_20px_rgba(56,189,248,0.6)]"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            )}

            {step === "done" && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 4 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="flex flex-col items-center gap-2"
              >
                <span className="text-4xl md:text-5xl">👋</span>
                <p className="text-2xl md:text-3xl font-semibold tracking-tight text-white">
                  Hello{" "}
                  <span className="bg-linear-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                    I`am Sugeng
                  </span>
                </p>
              </motion.div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroAnimation;

