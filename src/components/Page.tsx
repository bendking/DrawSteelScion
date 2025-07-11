import type { ReactNode } from "react";

interface PageProps {
  children: ReactNode;
  className?: string;
}

export function Page({ children, className = "" }: PageProps) {
  return (
    <div
      className={`w-full h-[800px] p-4 flex flex-row items-start gap-[15px] ${className}`}
    >
      {children}
    </div>
  );
}
