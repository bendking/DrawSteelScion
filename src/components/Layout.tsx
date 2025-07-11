import type { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export function AutoLayout({ children }: LayoutProps) {
  return (
    <div
      className="w-full scroll-smooth"
      style={{ backgroundColor: "#fffef8" }}
    >
      {/* Page Container */}
      <div className="space-y-8">
        {/* Page 1 - Full viewport height with two-column layout */}
        <div className="min-h-screen p-8">
          {/* Content distributed across two columns using CSS columns */}
          <div
            className="columns-1 md:columns-2 gap-8 space-y-4"
            style={{
              columnFill: "balance",
              // columnBreakInside: "avoid",
            }}
          >
            <div className="space-y-4">{children}</div>
          </div>
        </div>

        {/* Page Separator */}
        <div className="border-t-2 border-dashed border-gray-400 my-8 w-full"></div>

        {/* Additional pages would be dynamically added here */}
        {/* For now, this is a single-page implementation */}
        {/* Future enhancement: implement dynamic page creation based on content overflow */}
      </div>

      {/* Inline styles for column break prevention */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
          .columns-1 > *,
          .columns-2 > * {
            break-inside: avoid;
            page-break-inside: avoid;
            -webkit-column-break-inside: avoid;
            display: inline-block;
            width: 100%;
            margin-bottom: 1rem;
          }
          
          /* Ensure proper column balancing */
          .columns-2 {
            column-fill: balance;
          }
          
          /* Prevent orphaned elements */
          .columns-2 > *:first-child {
            margin-top: 0;
          }
        `,
        }}
      />
    </div>
  );
}
