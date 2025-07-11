import React from "react";

interface StyledLetterProps {
  children: string;
  highlightFirstLetter?: boolean;
}

export const StyledLetter: React.FC<StyledLetterProps> = ({
  children,
  highlightFirstLetter = false,
}) => {
  const styledLetter =
    "bg-black text-white rounded-[1px] px-[3px] text-[10px] font-bold";

  if (highlightFirstLetter && children.length > 0) {
    const firstLetter = children[0];
    const restOfWord = children.slice(1);
    return (
      <span>
        <span className={styledLetter}>{firstLetter}</span>
        {restOfWord}
      </span>
    );
  }

  if (children.length === 1) {
    return <span className={styledLetter}>{children}</span>;
  }

  return <span>{children}</span>;
};
