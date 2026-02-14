"use client";
import AnimatedBadge from "./ui/animated-badge";

interface SectionTitleProps {
  text: string;
  className?: string;
  shinyProps?: React.ComponentProps<typeof AnimatedBadge>;
}

export function SectionTitle({
  text,
  className,
  shinyProps,
}: SectionTitleProps) {
  return <AnimatedBadge text={text} color="#22d3ee" {...shinyProps} />;
}
