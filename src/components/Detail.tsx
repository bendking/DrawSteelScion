import { TextBlock } from "./TextBlock";

interface DetailProps {
  detailName: string;
  detailValue: string;
  className?: string;
}

export function Detail({
  detailName,
  detailValue,
  className = "",
}: DetailProps) {
  return (
    <TextBlock>
      <span className={`font-alegreya text-[10px] ${className}`}>
        <strong>{detailName}:</strong> {detailValue}
      </span>
    </TextBlock>
  );
}
