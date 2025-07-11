import type { ReactNode } from "react";
import { Text } from "./Text";

interface TextBlockProps {
  children: ReactNode[] | ReactNode;
  className?: string;
}

export function TextBlock({ children, className = "" }: TextBlockProps) {
  const childArray = Array.isArray(children) ? children : [children];

  return (
    <div className={`flex flex-col space-y-1 ${className}`}>
      {childArray.map((child, i) =>
        typeof child === "string" ? <Text key={i}>{child}</Text> : child
      )}
    </div>
  );
}
