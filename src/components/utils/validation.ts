export const validateTierResults = (
  addedStats?: ("Might" | "Agility" | "Reason" | "Intuition" | "Presence")[],
  tier1Result?: string,
  tier2Result?: string,
  tier3Result?: string
) => {
  const hasTierResults =
    addedStats !== undefined &&
    tier1Result !== undefined &&
    tier2Result !== undefined &&
    tier3Result !== undefined;

  const hasAnyTierResult =
    addedStats !== undefined ||
    tier1Result !== undefined ||
    tier2Result !== undefined ||
    tier3Result !== undefined;

  if (hasAnyTierResult && !hasTierResults) {
    throw new Error(
      "If any of addedStats, tier1Result, tier2Result, or tier3Result are provided, all must be provided."
    );
  }

  return hasTierResults;
};
