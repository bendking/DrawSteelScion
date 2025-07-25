import React from "react";
import { Text } from "./Text";
import { Highlight } from "./Highlight";

interface PowerRollProps {
  addedStats: ("Might" | "Agility" | "Reason" | "Intuition" | "Presence")[];
}

export const PowerRoll: React.FC<PowerRollProps> = ({ addedStats }) => {
  return (
    <div className="mt-1">
      <Text>
        <strong>
          Power Roll +{" "}
          {addedStats.map((stat, index) => (
            <React.Fragment key={stat}>
              {index > 0 && ", "}
              <Highlight highlightFirstLetter>{stat}</Highlight>
            </React.Fragment>
          ))}
          {":"}
        </strong>
      </Text>
    </div>
  );
};
