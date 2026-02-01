import { FloatingDock } from "./FloatingDock";
import ThemeColor from "./ThemeColor";
import {
  IconHome,
  IconCode,
  IconFileText,
  IconBriefcase,
  IconMessageCircle,
  IconMail,
  IconUser,
} from "@tabler/icons-react";

export function Navbar() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome
          className="h-full w-full text-base-content  hover:text-primary transition-colors
"
        />
      ),
      href: "#home",
    },

    {
      title: "Skills",
      icon: (
        <IconCode
          className="h-full w-full text-base-content hover:text-primary transition-colors
"
        />
      ),
      href: "#skills",
    },
    {
      title: "Resume",
      icon: (
        <IconFileText
          className="h-full w-full text-base-content hover:text-primary transition-colors
"
        />
      ),
      href: "#resume",
    },
    {
      title: "About",
      icon: (
        <IconUser
          className="h-full w-full text-base-content hover:text-primary transition-colors
"
        />
      ),
      href: "#about",
    },
    {
      title: "Portfolio",
      icon: (
        <IconBriefcase
          className="h-full w-full text-base-content hover:text-primary transition-colors
"
        />
      ),
      href: "#portfolio",
    },

    {
      title: "Testimonial",
      icon: (
        <IconMessageCircle
          className="h-full w-full text-base-content hover:text-primary transition-colors
"
        />
      ),
      href: "#testimonial",
    },
    {
      title: "Contact",
      icon: (
        <IconMail
          className="h-full w-full text-base-content hover:text-primary transition-colors
"
        />
      ),
      href: "#contact",
    },
  ];

  return (
    <div className="flex items-center justify-center h-140 w-full">
      {/* THEME SWITCHER */}
      <div className="sm:block absolute top-4 right-4 z-50">
        <ThemeColor />
      </div>
      <FloatingDock mobileClassName="translate-y-20" items={links} />
    </div>
  );
}
