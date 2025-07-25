import React from "react";
import { Text } from "./Text";

interface RollRangeProps {
  children: React.ReactNode;
}

export const RollRange: React.FC<RollRangeProps> = ({ children }) => {
  return (
    <div className="w-[25px] h-[12px] mb-[-1px] border border-gray-400 rounded flex items-center justify-center font-medium">
      <Text className="font-bold">{children}</Text>
    </div>
  );
};
