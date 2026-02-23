 "use client";

import React, { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  opacity: number;
  scale: number;
};

const PARTICLE_COUNT = 14;
const BASE_SCALE = 0.45;
const MAX_SCALE = 0.95;
const FOLLOW_STRENGTH_HEAD = 0.25;
const FOLLOW_STRENGTH_TAIL = 0.12;
const IDLE_FADE_OUT = 0.9;
const ACTIVE_OPACITY = 0.95;

export const CursorTrail: React.FC = () => {
  const particleRefs = useRef<(HTMLDivElement | null)[]>([]);
  const mousePosRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const particlesRef = useRef<Particle[]>(
    Array.from({ length: PARTICLE_COUNT }, () => ({
      x: 0,
      y: 0,
      opacity: 0,
      scale: BASE_SCALE,
    }))
  );
  const rafIdRef = useRef<number | null>(null);
  const lastMoveTimeRef = useRef<number>(0);
  const isPointerInsideRef = useRef<boolean>(false);

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      isPointerInsideRef.current = true;
      mousePosRef.current.x = event.clientX;
      mousePosRef.current.y = event.clientY;
      lastMoveTimeRef.current = performance.now();
    };

    const handlePointerLeave = () => {
      isPointerInsideRef.current = false;
    };

    window.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });
    window.addEventListener("pointerleave", handlePointerLeave, {
      passive: true,
    });

    const animate = () => {
      const particles = particlesRef.current;
      const now = performance.now();
      const isIdle = now - lastMoveTimeRef.current > 120;

      for (let i = 0; i < PARTICLE_COUNT; i += 1) {
        const particle = particles[i];

        const target =
          i === 0
            ? mousePosRef.current
            : {
                x: particles[i - 1].x,
                y: particles[i - 1].y,
              };

        const t =
          FOLLOW_STRENGTH_HEAD -
          ((FOLLOW_STRENGTH_HEAD - FOLLOW_STRENGTH_TAIL) *
            i) /
            Math.max(PARTICLE_COUNT - 1, 1);

        particle.x += (target.x - particle.x) * t;
        particle.y += (target.y - particle.y) * t;

        const indexFactor = 1 - i / PARTICLE_COUNT;
        const targetScale =
          BASE_SCALE + (MAX_SCALE - BASE_SCALE) * indexFactor * 1.1;
        particle.scale += (targetScale - particle.scale) * 0.2;

        const targetOpacity =
          isIdle || !isPointerInsideRef.current
            ? 0
            : ACTIVE_OPACITY * indexFactor;

        if (isIdle || !isPointerInsideRef.current) {
          particle.opacity *= IDLE_FADE_OUT;
        } else {
          particle.opacity += (targetOpacity - particle.opacity) * 0.25;
        }

        const element = particleRefs.current[i];
        if (!element) continue;

        const translateX = particle.x - window.innerWidth / 2;
        const translateY = particle.y - window.innerHeight / 2;

        element.style.opacity = particle.opacity.toFixed(3);
        element.style.transform = `translate3d(${translateX}px, ${translateY}px, 0) scale(${particle.scale.toFixed(
          3
        )})`;
      }

      rafIdRef.current = window.requestAnimationFrame(animate);
    };

    rafIdRef.current = window.requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
      if (rafIdRef.current !== null) {
        window.cancelAnimationFrame(rafIdRef.current);
      }
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-60 overflow-hidden"
      aria-hidden="true"
    >
      <div className="relative h-full w-full">
        {Array.from({ length: PARTICLE_COUNT }).map((_, index) => {
          const depthOpacity = 0.35 + (1 - index / PARTICLE_COUNT) * 0.4;
          return (
            <div
              key={index}
              ref={(el) => {
                particleRefs.current[index] = el;
              }}
              className="pointer-events-none absolute left-1/2 top-1/2 h-6 w-6 rounded-full bg-linear-to-r from-cyan-400 to-purple-500 mix-blend-screen blur-[2px] shadow-[0_0_30px_rgba(56,189,248,0.25)] will-change-transform"
              style={{
                opacity: 0,
                filter: `drop-shadow(0 0 30px rgba(192,132,252,${depthOpacity.toFixed(
                  2
                )}))`,
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CursorTrail;

