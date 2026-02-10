"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { usePathname } from "next/navigation";

export default function AOSProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  useEffect(() => {
    AOS.init({
      once: false,
      easing: "ease-out-cubic",
    });
  }, []);

  useEffect(() => {
    AOS.refreshHard(); // 🔥 INI KUNCINYA
  }, [pathname]);

  return children;
}
