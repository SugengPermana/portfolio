import { ThemeTogglerButton } from "./Theme-toggler";
import { ThemeTogglerButtonProps } from "./Theme-toggler";

interface ThemeTogglerButtonDemoProps {
  variant: ThemeTogglerButtonProps['variant'];
  size: ThemeTogglerButtonProps['size'];
  direction: ThemeTogglerButtonProps['direction'];
  system: boolean;
  className?: string;
}

export default function ThemeTogglerButtonDemo({
  variant,
  size,
  direction,
  system,
  className,
}: ThemeTogglerButtonDemoProps) {
  return (
    <ThemeTogglerButton
      variant={variant}
      size={size}
      direction={direction}
      modes={system ? ['light', 'dark', 'system'] : ['light', 'dark']}
      className={className}
    />
  );
}