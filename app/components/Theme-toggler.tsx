"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Monitor, Moon, Sun } from "lucide-react";
import { cn } from "@/app/lib/utils";

type ThemeSelection = "light" | "dark" | "system";

export interface ThemeTogglerButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "ghost" | "outline";
  size?: "default" | "sm" | "lg" | "icon";
  modes?: ThemeSelection[];
  direction?: 'ltr' | 'rtl'; // Kept for compatibility but not used in logic
}

export function ThemeTogglerButton({
  variant = "default",
  size = "default",
  modes = ["light", "dark", "system"],
  className,
  onClick,
  direction, // unused here
  ...props
}: ThemeTogglerButtonProps) {
  const { theme, setTheme } = useTheme();
  // We use a mounted state to avoid hydration mismatch
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    if (!mounted) return;
    const currentIndex = modes.indexOf(theme as ThemeSelection);
    const nextIndex = (currentIndex + 1) % modes.length;
    setTheme(modes[nextIndex]);
  };

  const currentIcon = React.useMemo(() => {
    if (!mounted) return <Sun className="h-4 w-4" />;
    
    if (theme === 'system') return <Monitor className="h-4 w-4" />;
    if (theme === 'dark') return <Moon className="h-4 w-4" />;
    return <Sun className="h-4 w-4" />;
  }, [theme, mounted]);

  // Simple button variants (simplified from shadcn/ui generic button for this specific use case if not available globally)
  const buttonClass = cn(
    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
    {
      "bg-primary text-primary-foreground shadow hover:bg-primary/90": variant === "default",
      "hover:bg-accent hover:text-accent-foreground": variant === "ghost",
      "border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground": variant === "outline",
      "h-9 px-4 py-2": size === "default",
      "h-8 rounded-md px-3 text-xs": size === "sm",
      "h-10 rounded-md px-8": size === "lg",
      "h-9 w-9": size === "icon",
    },
    className
  );

  return (
    <button
      className={buttonClass}
      onClick={(e) => {
        onClick?.(e);
        toggleTheme();
      }}
      {...props}
    >
      {currentIcon}
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}