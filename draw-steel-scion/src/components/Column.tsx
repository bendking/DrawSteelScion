import type { ReactNode } from "react";

interface ColumnProps {
  children: ReactNode;
  className?: string;
}

export function Column({ children, className = "" }: ColumnProps) {
  return (
    <div className={`w-[350px] h-full flex flex-col space-y-4 ${className}`}>
      {children}
    </div>
  );
}
