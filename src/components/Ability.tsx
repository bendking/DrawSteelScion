import React from "react";
import { Heading5 } from "./Heading5";
import { Subtitle } from "./Subtitle";
import { Text } from "./Text";
import { PowerRoll } from "./PowerRoll";
import { TierResultsTable } from "./TierResultsTable";
import { AbilitySection } from "./AbilitySection";
import { validateTierResults } from "../utils/validation";

interface TierResults {
  low: string;
  middle: string;
  high: string;
}

interface AbilityProps {
  title: string;
  subtitle: string;
  keywords: string;
  actionType: string;
  range: string;
  targets: string;
  addedStats?: ("Might" | "Agility" | "Reason" | "Intuition" | "Presence")[];
  tierResults?: TierResults;
  effect?: string | React.ReactNode;
  effectBeforeResult?: boolean;
  trigger?: string | React.ReactNode;
  spend?: React.ReactNode;
  className?: string;
}

export function Ability({
  title,
  subtitle,
  keywords,
  actionType,
  range,
  targets,
  addedStats,
  tierResults,
  effect,
  effectBeforeResult = false,
  trigger,
  spend,
  className = "",
}: AbilityProps) {
  const hasTierResults = validateTierResults(
    addedStats,
    tierResults?.low,
    tierResults?.middle,
    tierResults?.high
  );

  const sortedKeywords = keywords
    .split(",")
    .map((keyword) => keyword.trim())
    .sort()
    .join(", ");

  return (
    <div className={`${className}`}>
      {/* Header section with vertical line */}
      <div className="flex flex-row items-stretch">
        <div className="ability-vertical-line" />
        <div className="flex-1 pl-3">
          {/* Title */}
          <Heading5>{title}</Heading5>

          {/* Subtitle */}
          <Subtitle className="mt-[2px]">{subtitle}</Subtitle>

          {/* Horizontal rule */}
          <hr className="ability-hr mt-[2px]" />

          {/* Keywords and Action Type */}
          <div className="flex justify-between items-center mt-1">
            <Text>
              <strong>{sortedKeywords}</strong>
            </Text>
            <Text>
              <strong>{actionType}</strong>
            </Text>
          </div>

          {/* Range and Targets */}
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-[1px]">
              <span className="text-[10px]" aria-label="Range">
                ◣
              </span>
              <Text>{range}</Text>
            </div>
            <div className="flex items-center space-x-[1px]">
              <span className="text-[10px]" aria-label="Targets">
                ◎
              </span>
              <Text>{targets}</Text>
            </div>
          </div>
        </div>
      </div>

      {/* Power Roll and Tier Results (only if all are provided) */}
      {hasTierResults && (
        <>
          {/* Trigger and Effect before results if specified */}
          {effectBeforeResult && (
            <AbilitySection trigger={trigger} effect={effect} />
          )}

          <PowerRoll addedStats={addedStats!} />

          <TierResultsTable results={tierResults!} />

          {/* Trigger, Effect, and Spend after results (default) */}
          {!effectBeforeResult && (
            <AbilitySection trigger={trigger} effect={effect} spend={spend} />
          )}
        </>
      )}

      {/* If no tier results, just render trigger, effect, and spend */}
      {!hasTierResults && (
        <AbilitySection trigger={trigger} effect={effect} spend={spend} />
      )}
    </div>
  );
}
