import type { ReactNode } from "react";

interface Heading1Props {
  children: ReactNode;
  className?: string;
}

export function Heading1({ children, className = "" }: Heading1Props) {
  return <h1 className={`underline capitalize ${className}`}>{children}</h1>;
}
