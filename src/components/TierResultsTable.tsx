import React from "react";
import { Text } from "./Text";
import { RollRange } from "./RollRange";
import { processTierResultText } from "../utils/textProcessing";

interface TierResults {
  low: string;
  middle: string;
  high: string;
}

interface TierResultsTableProps {
  results: TierResults;
}

export const TierResultsTable: React.FC<TierResultsTableProps> = ({
  results,
}) => {
  return (
    <div className="space-y-1">
      {/* ≤11 row */}
      <div className="flex gap-2 items-center justify-center">
        <RollRange>≤11</RollRange>
        <Text className="grow shrink basis-0">
          {processTierResultText(results.low)}
        </Text>
      </div>

      {/* 12-16 row */}
      <div className="flex gap-2 items-center justify-center">
        <RollRange>12–16</RollRange>
        <Text className="grow shrink basis-0">
          {processTierResultText(results.middle)}
        </Text>
      </div>

      {/* 17+ row */}
      <div className="flex gap-2 items-center justify-center">
        <RollRange>17+</RollRange>
        <Text className="grow shrink basis-0">
          {processTierResultText(results.high)}
        </Text>
      </div>
    </div>
  );
};
