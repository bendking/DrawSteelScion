import type { ReactNode } from "react";

interface Heading4Props {
  children: ReactNode;
  className?: string;
}

export function Heading4({ children, className = "" }: Heading4Props) {
  return <h4 className={`capitalize ${className}`}>{children}</h4>;
}
