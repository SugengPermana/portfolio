import { FloatingDock } from "./FloatingDock";
import {
  IconHome,
  IconFileText,
  IconBriefcase,
  IconPhoneOutgoing,
  IconUserCode,
} from "@tabler/icons-react";

export function Navbar() {
  const links = [
    {
      title: "Home",
      icon: <IconHome className="h-full w-full" />,
      href: "#home",
    },

    {
      title: "About",
      icon: <IconUserCode className="h-full w-full" />,
      href: "#about",
    },
    {
      title: "Projects",
      icon: <IconBriefcase className="h-full w-full" />,
      href: "#projects",
    },
    {
      title: "Resume",
      icon: <IconFileText className="h-full w-full" />,
      href: "#resume",
    },
    {
      title: "Contact",
      icon: <IconPhoneOutgoing className="h-full w-full" />,
      href: "#contact",
    },
  ]
    
  return (
    <>
      <FloatingDock items={links} />
    </>
  );
}
