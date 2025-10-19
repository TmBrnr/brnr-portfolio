import Prism from "@/components/ui/prism";
import { Button } from "@/components/ui/button";
import { FlipWords } from "@/components/ui/flip-words";

export default function Hero() {
  return (
    <div className="relative w-full h-screen overflow-hidden dark:bg-zinc-900 bg-black">
      <div className="absolute inset-0 w-full h-full">
        <Prism
          animationType="3drotate"
          glow={1.2}
          noise={0.3}
          scale={3.6}
          hueShift={0.2}
          colorFrequency={0.8}
          bloom={1.2}
          timeScale={0.3}
          suspendWhenOffscreen={true}
        />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full w-full px-4 sm:px-6 mx-auto max-w-[90%] sm:max-w-6xl">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-8xl font-bold text-white">Brnr</h1>
          <div className="lg:text-3xl text-nowrap text-xl text-white/80 flex items-center">
            People call me
            <FlipWords
              words={["Developer", "Growth Hacker", "AI Enthusiast"]}
              className=" font-semibold text-white text-nowrap lg:text-3xl text-2xl"
            />
          </div>
          <Button href="#contact">Contact me</Button>
        </div>
      </div>
    </div>
  );
}
