"use client";
import { useState, useEffect, useCallback } from "react";

const roles = ["FrontEnd Engineer", "BackEnd Engineer", "AI Engineer"];

type TypingGlitchProps = {
  isGlitching: boolean;
};

const TypingGlitch = ({ isGlitching }: TypingGlitchProps) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const currentRole = roles[roleIndex];

  const tick = useCallback(() => {
    if (!isDeleting) {
      // Typing phase
      if (displayText.length < currentRole.length) {
        setDisplayText(currentRole.slice(0, displayText.length + 1));
      } else {
        // Finished typing → pause then start deleting
        setTimeout(() => setIsDeleting(true), 2000);
      }
    } else {
      // Deleting phase
      if (displayText.length > 0) {
        setDisplayText(displayText.slice(0, -1));
      } else {
        // Finished deleting → move to next role
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }
  }, [displayText, isDeleting, currentRole]);

  useEffect(() => {
    const speed = isDeleting ? 50 : 80;
    const timer = setTimeout(tick, speed);
    return () => clearTimeout(timer);
  }, [tick, isDeleting]);

  return (
    <span className="inline-flex items-center">
      <span
        className={`glitch-text italic font-semibold transition-all duration-200 ${
          isGlitching ? "glitch-active" : ""
        }`}
        data-text={displayText}
      >
        {displayText}
      </span>
      <span className="animate-blink ml-px inline-block w-[2px] h-[1.1em] bg-purple-500 align-middle" />
    </span>
  );
};

export default TypingGlitch;
