import Hero from "@/components/hero";
import About from "@/components/about";
import Contact from "@/components/contact";
import { FloatingDock } from "@/components/ui/floating-dock";
import { IconRocket, IconMail, IconBriefcase } from "@tabler/icons-react";
import Footer from "@/components/footer";
export default function Home() {
  const navItems = [
    {
      title: "Start",
      icon: <IconRocket className="h-full w-full" />,
      href: "#hero",
    },
    {
      title: "About Me",
      icon: <IconBriefcase className="h-full w-full" />,
      href: "#about",
    },
    {
      title: "Contact",
      icon: <IconMail className="h-full w-full" />,
      href: "#contact",
    },
  ];

  return (
    <>
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <FloatingDock
        items={navItems}
        desktopClassName="fixed bottom-8 left-1/2 -translate-x-1/2 z-50"
        mobileClassName="fixed bottom-8 right-8 z-99"
      />
      <Footer />
    </>
  );
}
