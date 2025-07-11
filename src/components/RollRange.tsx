import React from "react";
import { Text } from "./Text";

interface RollRangeProps {
  children: React.ReactNode;
}

export const RollRange: React.FC<RollRangeProps> = ({ children }) => {
  return (
    <div className="w-[30px] h-[16px] border border-gray-400 rounded flex items-center justify-center font-medium">
      <Text>{children}</Text>
    </div>
  );
};
