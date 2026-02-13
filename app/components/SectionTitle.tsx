import ShinyText from "./ui/ShinyText";
import { cn } from "@/app/lib/utils";

interface SectionTitleProps {
  text: string;
  className?: string;
  shinyProps?: React.ComponentProps<typeof ShinyText>;
}

export function SectionTitle({
  text,
  className,
  shinyProps,
}: SectionTitleProps) {
  return (
    <ShinyText
      className={cn(
        "inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-primary backdrop-blur-sm group hover:scale-105 transition-transform duration-300",
        className,
      )}
      text={text}
      speed={2}
      delay={1}
      color="#a600ff"
      shineColor="#e1ff00"
      spread={110}
      direction="left"
      yoyo={false}
      pauseOnHover={false}
      disabled={false}
      {...shinyProps}
    />
  );
}
