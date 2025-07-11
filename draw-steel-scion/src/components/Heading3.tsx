import type { ReactNode } from "react";

interface Heading3Props {
  children: ReactNode;
  className?: string;
}

export function Heading3({ children, className = "" }: Heading3Props) {
  return <h3 className={`capitalize ${className}`}>{children}</h3>;
}
