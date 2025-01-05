import Hero from "@/components/hero";
import About from "@/components/about";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconRocket,
  IconUser,
  IconMail,
  IconBriefcase,
} from "@tabler/icons-react";

export default function Home() {
  const navItems = [
    {
      title: "Start",
      icon: <IconRocket className="h-full w-full" />,
      href: "/",
    },
    {
      title: "About Me",
      icon: <IconUser className="h-full w-full" />,
      href: "/about",
    },
    {
      title: "Projects",
      icon: <IconBriefcase className="h-full w-full" />,
      href: "/projects",
    },
    {
      title: "Contact",
      icon: <IconMail className="h-full w-full" />,
      href: "/contact",
    },
  ];

  return (
    <>
      <Hero />
      <About />
      <FloatingDock
        items={navItems}
        desktopClassName="fixed bottom-8 left-1/2 -translate-x-1/2"
        mobileClassName="fixed bottom-8 right-8"
      />
    </>
  );
}
