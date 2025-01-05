import { Container } from "./container";

interface SectionProps {
  children: React.ReactNode;
}

export default function Section({ children }: SectionProps) {
  return (
    <div className="relative w-full">
      {/* Background gradient div */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(33.82%_46.83%_at_50%_0%,rgba(161,161,170,0.04)_0%,rgba(161,161,170,0)_100%)] before:absolute before:content-[''] before:top-0 before:left-[20%] before:right-[20%] before:h-[1px] before:bg-gradient-to-r before:from-transparent before:via-zinc-500/50 before:to-transparent" />

      {/* Content */}
      <Container>{children}</Container>
    </div>
  );
}
