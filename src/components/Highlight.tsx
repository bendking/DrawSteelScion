import React from "react";

interface HighlightProps {
  children: string;
  highlightFirstLetter?: boolean;
}

export const Highlight: React.FC<HighlightProps> = ({
  children,
  highlightFirstLetter = false,
}) => {
  const highlight =
    "bg-black text-white rounded-[1px] px-[3px] text-[10px] font-bold";

  if (highlightFirstLetter && children.length > 0) {
    const firstLetter = children[0];
    const restOfWord = children.slice(1);

    return (
      <span>
        <span className={highlight}>{firstLetter}</span>
        {restOfWord}
      </span>
    );
  }

  if (!highlightFirstLetter && children.length > 0) {
    return <span className={highlight}>{children}</span>;
  }

  return <span>{children}</span>;
};
