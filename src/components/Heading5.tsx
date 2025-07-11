import type { ReactNode } from "react";

interface Heading5Props {
  children: ReactNode;
  className?: string;
}

export function Heading5({ children, className = "" }: Heading5Props) {
  return <h5 className={`capitalize ${className}`}>{children}</h5>;
}
