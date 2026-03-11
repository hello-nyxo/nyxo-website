import type { ReactNode } from "react";

interface AnimateOnScrollProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  animation?: "fade-in-up" | "fade-in" | "scale-in";
}

export default function AnimateOnScroll({
  children,
  className = "",
}: AnimateOnScrollProps) {
  return <div className={className}>{children}</div>;
}
