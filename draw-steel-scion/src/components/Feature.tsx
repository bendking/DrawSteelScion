import type { ReactNode } from "react";
import { Heading5 } from "./Heading5";
import { TextBlock } from "./TextBlock";

interface FeatureProps {
  title: ReactNode;
  children: ReactNode[] | ReactNode;
  className?: string;
}

export function Feature({ title, children, className = "" }: FeatureProps) {
  return (
    <div className={`flex flex-col ${className}`}>
      <Heading5>{title}</Heading5>
      <TextBlock>{children}</TextBlock>
    </div>
  );
}
