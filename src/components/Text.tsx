import type { ReactNode } from "react";

interface TextProps {
  children: ReactNode;
  className?: string;
}

export function Text({ children, className = "" }: TextProps) {
  return (
    <div
      className={`font-alegreya text-[10px] leading-normal break-words overflow-wrap-anywhere ${className}`}
    >
      {children}
    </div>
  );
}
