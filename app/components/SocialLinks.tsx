"use client";
import Link from "next/link";
import { cn } from "@/app/lib/utils";
import {
  IconBrandWhatsapp,
  IconBrandGithub,
  IconBrandLinkedin,
} from "@tabler/icons-react";

interface SocialLinksProps {
  className?: string;
  iconClassName?: string;
}

export function SocialLinks({ className, iconClassName }: SocialLinksProps) {
  const socials = [
    {
      title: "LinkedIn",
      href: "https://www.linkedin.com/in/sugengpermanadesembry",
      icon: <IconBrandLinkedin className="h-full w-full" />,
    },
    {
      title: "GitHub",
      href: "https://github.com/SugengPermana",
      icon: <IconBrandGithub className="h-full w-full" />,
    },
    {
      title: "WhatsApp",
      href: "https://wa.me/6288299898410",
      icon: <IconBrandWhatsapp className="h-full w-full" />,
    },
  ];

  return (
    <div className={cn("flex gap-4", className)}>
      {socials.map((social) => (
        <Link
          key={social.title}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "p-3 rounded-full bg-accent/10 border border-border text-muted-foreground hover:text-foreground hover:bg-accent hover:border-accent-foreground/20 transition-colors shadow-lg flex items-center justify-center",
            iconClassName,
          )}
        >
          <div className="h-5 w-5">{social.icon}</div>
        </Link>
      ))}
    </div>
  );
}
