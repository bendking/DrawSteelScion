import React from "react";
import { StyledLetter } from "../components/StyledLetter";

export const processTierResultText = (text: string) => {
  const words = text.split(" ");

  return words.map((word, index) => {
    if (word.length === 1 && /[A-Za-z]/.test(word)) {
      return (
        <React.Fragment key={index}>
          {index > 0 && " "}
          <StyledLetter>{word}</StyledLetter>
        </React.Fragment>
      );
    }

    return (
      <React.Fragment key={index}>
        {index > 0 && " "}
        {word}
      </React.Fragment>
    );
  });
};
