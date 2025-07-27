import type { ReactNode } from "react";
import { Children } from "react";

interface ManualLayoutProps {
  children: ReactNode;
  className?: string;
}

export function ManualLayout({ children, className = "" }: ManualLayoutProps) {
  // Flatten children and filter out null/undefined
  const pages = Children.toArray(children).filter(Boolean);

  return (
    <main
      className={`max-w-[750px] flex flex-col w-full p-4 m-2 border-1 border-gray-400 ${className}`}
      style={{ backgroundColor: "#fffef8" }}
    >
      {pages.map((child, idx) => (
        <div key={idx} className="w-full">
          {child}
          {/* Separator: only after each page except the last */}
          {idx < pages.length - 1 && (
            <div className="border-b-2 border-dashed border-gray-400 w-full" />
            // border-b border-dashed border-gray-400
          )}
        </div>
      ))}
    </main>
  );
}
