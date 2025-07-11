import React from "react";
import { Text } from "./Text";
import { StyledLetter } from "./StyledLetter";

interface PowerRollProps {
  addedStats: ("Might" | "Agility" | "Reason" | "Intuition" | "Presence")[];
}

export const PowerRoll: React.FC<PowerRollProps> = ({ addedStats }) => {
  return (
    <div className="mt-0">
      <Text>
        <strong>
          Power Roll +{" "}
          {addedStats.map((stat, index) => (
            <React.Fragment key={stat}>
              {index > 0 && ", "}
              <StyledLetter highlightFirstLetter>{stat}</StyledLetter>
            </React.Fragment>
          ))}
        </strong>
      </Text>
    </div>
  );
};
