import type { ReactNode } from "react";

interface TitleProps {
  children: ReactNode;
  className?: string;
}

export function Title({ children, className = "" }: TitleProps) {
  return (
    <h1 className={`uppercase underline title ${className}`}>{children}</h1>
  );
}
