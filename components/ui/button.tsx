import { cn } from "@/lib/utils";
import Link from "next/link";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

interface ButtonProps {
  href?: string;
  children: React.ReactNode;
  className?: string;
}

export const Button = ({
  href,
  children,
  className,
  ...props
}: ButtonProps) => {
  const content = href ? (
    <Link href={href} className={cn("text-white/80", className)} {...props}>
      {children}
    </Link>
  ) : (
    <button className={cn("text-white/80", className)} {...props}>
      {children}
    </button>
  );

  return (
    <HoverBorderGradient className="w-full">{content}</HoverBorderGradient>
  );
};
