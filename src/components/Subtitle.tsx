import type { ReactNode } from "react";

interface SubtitleProps {
  children: ReactNode;
  className?: string;
}

export function Subtitle({ children, className = "" }: SubtitleProps) {
  return (
    <div className="flex">
      <span
        className={`font-alegreya-sans text-[11px] leading-tight italic ${className}`.trim()}
      >
        {children}
      </span>
    </div>
  );
}
