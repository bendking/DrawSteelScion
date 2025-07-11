import React from "react";
import { Detail } from "./Detail";

interface AbilitySectionProps {
  trigger?: string | React.ReactNode;
  effect?: string | React.ReactNode;
  spend?: React.ReactNode;
}

export const AbilitySection: React.FC<AbilitySectionProps> = ({
  trigger,
  effect,
  spend,
}) => {
  const triggerSection = trigger && (
    <div className="mt-1">
      {typeof trigger === "string" ? (
        <Detail detailName="Trigger" detailValue={trigger} />
      ) : (
        trigger
      )}
    </div>
  );

  const effectSection = effect && (
    <div className="mt-1">
      {typeof effect === "string" ? (
        <Detail detailName="Effect" detailValue={effect} />
      ) : (
        effect
      )}
    </div>
  );

  const spendSection = spend && <div className="mt-1">{spend}</div>;

  return (
    <>
      {triggerSection}
      {triggerSection && effectSection && <div className="my-1" />}
      {effectSection}
      {(triggerSection || effectSection) && spendSection && (
        <div className="my-1" />
      )}
      {spendSection}
    </>
  );
};
