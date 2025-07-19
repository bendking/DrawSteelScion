import { Text } from "./Text";

interface AdvancementTableProps {
  columns: string[];
  rows: Array<{ [key: string]: string }>;
  className?: string;
  showLevel?: boolean;
}

export function AdvancementTable({
  columns,
  rows,
  className = "",
  showLevel = false,
}: AdvancementTableProps) {
  return (
    <div className={`overflow-x-auto ${className}`}>
      <table className="w-full border-collapse text-xs leading-tight">
        <thead>
          <tr>
            {showLevel && (
              <th className="px-1 py-0.5 text-center align-middle font-semibold">
                <Text>Level</Text>
              </th>
            )}
            {columns.map((column) => (
              <th
                key={column}
                className="px-1 py-0.5 text-left align-middle min-w-[75px] font-semibold"
              >
                <Text>{column}</Text>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? "bg-[#f3f3ee]" : "bg-transparent"}
            >
              {showLevel && (
                <td className="px-1 py-0.5 text-center align-middle">
                  <Text>{row.level}</Text>
                </td>
              )}
              {columns.map((column) => (
                <td
                  key={column}
                  className="px-1 py-0.5 align-middle min-w-[75px]"
                >
                  <Text>{row[column] || "—"}</Text>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
