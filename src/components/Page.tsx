import type { ReactNode } from "react";

interface PageProps {
  children: ReactNode;
  className?: string;
}

export function Page({ children, className = "" }: PageProps) {
  // TODO: Consider if to put a specific height when not on mobile (md:h-[800px])
  return (
    <div
      className={`w-full p-4 flex flex-col md:flex-row items-start gap-[15px] ${className}`}
    >
      {children}
    </div>
  );
}
