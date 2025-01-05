import { AuroraBackground } from "@/components/ui/aurora-background";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { FlipWords } from "@/components/ui/flip-words";
import { Container } from "@/components/ui/container";
import Link from "next/link";

export default function Hero() {
  return (
    <AuroraBackground className="dark:bg-zinc-900">
      <Container>
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-8xl font-bold text-white">Brnr</h1>
          <div className="lg:text-3xl text-2xl text-white/80 flex items-center">
            People call me
            <FlipWords
              words={["Developer", "Growth Hacker", "AI Enthusiast"]}
              className=" font-semibold text-white text-nowrap lg:text-3xl text-2xl"
            />
          </div>
          <HoverBorderGradient className="w-full">
            <Link href="/about" className="text-white/80">
              Contact me
            </Link>
          </HoverBorderGradient>
        </div>
      </Container>
    </AuroraBackground>
  );
}
